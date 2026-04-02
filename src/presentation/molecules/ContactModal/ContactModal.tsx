"use client";

import { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@heroui/react";
import { Input } from "@/presentation/atoms/Input";
import { Textarea } from "@/presentation/atoms/Textarea";
import { Button } from "@/presentation/atoms/Button";
import { Text } from "@/presentation/atoms/Text";
import {
  createContactFormSchema,
  type TContactFormErrors,
} from "@/lib/schemas/contactForm";

type TContactModalProps = {
  readonly isOpen: boolean;
  readonly onOpenChange: (open: boolean) => void;
  readonly modalTitle: string;
  readonly nameLabel: string;
  readonly emailLabel: string;
  readonly messageLabel: string;
  readonly sendButton: string;
  readonly successMessage: string;
  readonly errorMessage: string;
  readonly validation: TContactFormErrors;
};

type TFieldErrors = {
  name?: string;
  email?: string;
  message?: string;
};

export function ContactModal({
  isOpen,
  onOpenChange,
  modalTitle,
  nameLabel,
  emailLabel,
  messageLabel,
  sendButton,
  successMessage,
  errorMessage,
  validation,
}: TContactModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [fieldErrors, setFieldErrors] = useState<TFieldErrors>({});

  function validate() {
    const schema = createContactFormSchema(validation);
    const result = schema.safeParse({ name, email, message });

    if (result.success) {
      setFieldErrors({});
      return true;
    }

    const errors: TFieldErrors = {};
    for (const issue of result.error.issues) {
      const field = issue.path[0] as keyof TFieldErrors;
      if (!errors[field]) {
        errors[field] = issue.message;
      }
    }
    setFieldErrors(errors);
    return false;
  }

  async function handleSubmit() {
    if (!validate()) return;

    setIsLoading(true);
    setStatus("idle");

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });

    setIsLoading(false);

    if (response.ok) {
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
      setFieldErrors({});
    } else {
      setStatus("error");
    }
  }

  function handleOpenChange(open: boolean) {
    if (!open) {
      setStatus("idle");
      setFieldErrors({});
    }
    onOpenChange(open);
  }

  return (
    <Modal isOpen={isOpen} onOpenChange={handleOpenChange} placement="center">
      <ModalContent>
        {() => (
          <>
            <ModalHeader>{modalTitle}</ModalHeader>
            <ModalBody>
              {status === "success" && (
                <Text variant="caption" className="text-success">
                  {successMessage}
                </Text>
              )}
              {status === "error" && (
                <Text variant="caption" className="text-danger">
                  {errorMessage}
                </Text>
              )}
              <Input
                label={nameLabel}
                value={name}
                onChange={(v) => {
                  setName(v);
                  setFieldErrors((e) => ({ ...e, name: undefined }));
                }}
                isRequired
                isInvalid={!!fieldErrors.name}
                errorMessage={fieldErrors.name}
              />
              <Input
                label={emailLabel}
                type="email"
                value={email}
                onChange={(v) => {
                  setEmail(v);
                  setFieldErrors((e) => ({ ...e, email: undefined }));
                }}
                isRequired
                isInvalid={!!fieldErrors.email}
                errorMessage={fieldErrors.email}
              />
              <Textarea
                label={messageLabel}
                value={message}
                onChange={(v) => {
                  setMessage(v);
                  setFieldErrors((e) => ({ ...e, message: undefined }));
                }}
                minRows={4}
                isRequired
                isInvalid={!!fieldErrors.message}
                errorMessage={fieldErrors.message}
              />
            </ModalBody>
            <ModalFooter>
              <Button
                color="primary"
                onPress={handleSubmit}
                isLoading={isLoading}
              >
                {sendButton}
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
