import { z } from "zod/v4";

export type TContactFormErrors = {
  readonly nameRequired: string;
  readonly nameMin: string;
  readonly emailRequired: string;
  readonly emailInvalid: string;
  readonly messageRequired: string;
  readonly messageMin: string;
};

export function createContactFormSchema(errors: TContactFormErrors) {
  return z.object({
    name: z
      .string()
      .min(1, errors.nameRequired)
      .min(2, errors.nameMin),
    email: z
      .string()
      .min(1, errors.emailRequired)
      .email(errors.emailInvalid),
    message: z
      .string()
      .min(1, errors.messageRequired)
      .min(10, errors.messageMin),
  });
}

export type TContactFormData = z.infer<ReturnType<typeof createContactFormSchema>>;
