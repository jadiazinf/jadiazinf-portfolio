"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { ESectionId, SECTION_ORDER, ANIMATION_DURATION_MS } from "@/lib/constants";

export type TSectionState = "active" | "entering" | "exiting" | "inactive";

export function useSectionNavigation() {
  const [activeSection, setActiveSection] = useState<ESectionId>(ESectionId.Hero);
  const [sectionStates, setSectionStates] = useState<Record<ESectionId, TSectionState>>(
    () => createInitialStates(ESectionId.Hero)
  );
  const isTransitioning = useRef(false);

  const navigateTo = useCallback((targetSection: ESectionId) => {
    if (targetSection === activeSection || isTransitioning.current) return;

    isTransitioning.current = true;

    setSectionStates((prev) => ({
      ...prev,
      [activeSection]: "exiting",
    }));

    setTimeout(() => {
      setSectionStates(createInitialStates(targetSection, "entering"));
      setActiveSection(targetSection);

      setTimeout(() => {
        setSectionStates(createInitialStates(targetSection, "active"));
        isTransitioning.current = false;
      }, ANIMATION_DURATION_MS + 100);
    }, ANIMATION_DURATION_MS);
  }, [activeSection]);

  const navigateNext = useCallback(() => {
    const currentIndex = SECTION_ORDER.indexOf(activeSection);
    if (currentIndex < SECTION_ORDER.length - 1) {
      navigateTo(SECTION_ORDER[currentIndex + 1]);
    }
  }, [activeSection, navigateTo]);

  const navigatePrevious = useCallback(() => {
    const currentIndex = SECTION_ORDER.indexOf(activeSection);
    if (currentIndex > 0) {
      navigateTo(SECTION_ORDER[currentIndex - 1]);
    }
  }, [activeSection, navigateTo]);

  useScrollNavigation({ navigateNext, navigatePrevious });
  useTouchNavigation({ navigateNext, navigatePrevious });
  useKeyboardNavigation({ navigateNext, navigatePrevious });

  return { activeSection, sectionStates, navigateTo };
}

function getActiveSectionWrapper(): HTMLElement | null {
  return document.querySelector("[data-section-wrapper]:not(.hidden)");
}

function isAtTop(el: HTMLElement): boolean {
  return el.scrollTop <= 1;
}

function isAtBottom(el: HTMLElement): boolean {
  return el.scrollTop + el.clientHeight >= el.scrollHeight - 1;
}

function canScrollInternally(el: HTMLElement): boolean {
  return el.scrollHeight > el.clientHeight + 1;
}

function useScrollNavigation({
  navigateNext,
  navigatePrevious,
}: {
  navigateNext: () => void;
  navigatePrevious: () => void;
}) {
  const accumulatedDelta = useRef(0);
  const scrollTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const SCROLL_THRESHOLD = 80;

    function handleWheel(event: WheelEvent) {
      const wrapper = getActiveSectionWrapper();

      // If the section has scrollable content, let it scroll naturally
      // Only intercept when at the edges
      if (wrapper && canScrollInternally(wrapper)) {
        const scrollingDown = event.deltaY > 0;
        const scrollingUp = event.deltaY < 0;

        if (scrollingDown && !isAtBottom(wrapper)) {
          // Let the section scroll down naturally
          return;
        }

        if (scrollingUp && !isAtTop(wrapper)) {
          // Let the section scroll up naturally
          return;
        }
      }

      // At edge or no scrollable content — handle section navigation
      event.preventDefault();

      accumulatedDelta.current += event.deltaY;

      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        accumulatedDelta.current = 0;
      }, 200);

      if (accumulatedDelta.current > SCROLL_THRESHOLD) {
        accumulatedDelta.current = 0;
        navigateNext();
      } else if (accumulatedDelta.current < -SCROLL_THRESHOLD) {
        accumulatedDelta.current = 0;
        navigatePrevious();
      }
    }

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [navigateNext, navigatePrevious]);
}

function useTouchNavigation({
  navigateNext,
  navigatePrevious,
}: {
  navigateNext: () => void;
  navigatePrevious: () => void;
}) {
  const touchStartY = useRef(0);
  const touchStartTime = useRef(0);

  useEffect(() => {
    const SWIPE_THRESHOLD = 50;
    const SWIPE_MAX_TIME = 500;

    function handleTouchStart(event: TouchEvent) {
      touchStartY.current = event.touches[0].clientY;
      touchStartTime.current = Date.now();
    }

    function handleTouchEnd(event: TouchEvent) {
      const deltaY = touchStartY.current - event.changedTouches[0].clientY;
      const elapsed = Date.now() - touchStartTime.current;

      if (elapsed > SWIPE_MAX_TIME || Math.abs(deltaY) < SWIPE_THRESHOLD) return;

      const wrapper = getActiveSectionWrapper();

      if (wrapper && canScrollInternally(wrapper)) {
        const swipingDown = deltaY > 0;
        const swipingUp = deltaY < 0;

        if (swipingDown && !isAtBottom(wrapper)) return;
        if (swipingUp && !isAtTop(wrapper)) return;
      }

      if (deltaY > 0) {
        navigateNext();
      } else {
        navigatePrevious();
      }
    }

    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [navigateNext, navigatePrevious]);
}

function useKeyboardNavigation({
  navigateNext,
  navigatePrevious,
}: {
  navigateNext: () => void;
  navigatePrevious: () => void;
}) {
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "ArrowDown" || event.key === "PageDown") {
        event.preventDefault();
        navigateNext();
      } else if (event.key === "ArrowUp" || event.key === "PageUp") {
        event.preventDefault();
        navigatePrevious();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [navigateNext, navigatePrevious]);
}

function createInitialStates(
  activeId: ESectionId,
  activeState: TSectionState = "active"
): Record<ESectionId, TSectionState> {
  return Object.values(ESectionId).reduce(
    (states, id) => ({
      ...states,
      [id]: id === activeId ? activeState : "inactive",
    }),
    {} as Record<ESectionId, TSectionState>
  );
}
