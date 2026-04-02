"use client";

import { useDisclosure } from "@heroui/react";
import { useLocale } from "next-intl";
import { Text } from "@/presentation/atoms/Text";
import { SectionHeader } from "@/presentation/molecules/SectionHeader";
import { SocialIcon } from "@/presentation/molecules/SocialIcon";
import { ContactModal } from "@/presentation/molecules/ContactModal";
import { ESocialPlatform } from "@/domain/entities";
import type { TSocialLinkDTO } from "@/application/dto";
import type { TContactFormErrors } from "@/lib/schemas/contactForm";

type TContactSectionProps = {
  readonly title: string;
  readonly subtitle: string;
  readonly orConnect: string;
  readonly socialLinks: TSocialLinkDTO[];
  readonly nameLabel: string;
  readonly emailLabel: string;
  readonly messageLabel: string;
  readonly sendButton: string;
  readonly modalTitle: string;
  readonly successMessage: string;
  readonly errorMessage: string;
  readonly downloadCv: string;
  readonly validation: TContactFormErrors;
};

export function ContactSection({
  title,
  subtitle,
  orConnect,
  socialLinks,
  nameLabel,
  emailLabel,
  messageLabel,
  sendButton,
  modalTitle,
  successMessage,
  errorMessage,
  downloadCv,
  validation,
}: TContactSectionProps) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const locale = useLocale();

  return (
    <section className="relative pt-24 pb-12 px-12 md:px-20 lg:px-32 overflow-hidden">
      {/* Large rings */}
      <div className="absolute -bottom-40 -right-40 w-96 h-96 border border-primary/8 rounded-full pointer-events-none" />
      <div className="absolute -bottom-28 -right-28 w-72 h-72 border border-primary/12 rounded-full pointer-events-none" />

      {/* Glow */}
      <div className="absolute top-1/3 right-1/4 w-56 h-56 bg-primary/5 rounded-full blur-[60px] pointer-events-none" />

      <div className="relative z-10 max-w-3xl flex flex-col gap-10">
        <SectionHeader number="05" title={title} />

        <div className="flex flex-col gap-6">
          <Text variant="body" className="text-default-400">
            {subtitle}
          </Text>

          <Text
            variant="caption"
            className="uppercase tracking-[0.2em] text-default-500 text-xs"
          >
            {orConnect}
          </Text>

          <div className="flex flex-wrap gap-3">
            {socialLinks.map((link) => (
              <SocialIcon
                key={link.platform}
                platform={link.platform}
                url={link.url}
                label={link.label}
                onClick={
                  link.platform === ESocialPlatform.Email ? onOpen : undefined
                }
              />
            ))}
            <a
              href={`/cv/diaz_jesus_${locale}_cv.pdf`}
              download
              className="flex items-center gap-3 px-5 py-3 rounded-lg bg-content1/50 border border-default-100 hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 text-default-500 hover:text-primary"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              <span className="text-sm font-medium">{downloadCv}</span>
            </a>
          </div>
        </div>
      </div>

      <ContactModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        modalTitle={modalTitle}
        nameLabel={nameLabel}
        emailLabel={emailLabel}
        messageLabel={messageLabel}
        sendButton={sendButton}
        successMessage={successMessage}
        errorMessage={errorMessage}
        validation={validation}
      />
    </section>
  );
}
