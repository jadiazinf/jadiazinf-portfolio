// Server-only environment variables
// Import this only in server components, API routes, or server actions

type TServerEnv = {
  RESEND_API_KEY: string;
  RESEND_FROM_EMAIL: string;
  RESEND_TO_EMAIL: string;
};

const requiredServerEnvs: (keyof TServerEnv)[] = [
  "RESEND_API_KEY",
  "RESEND_FROM_EMAIL",
  "RESEND_TO_EMAIL",
];

function getServerEnv(): TServerEnv {
  const missing = requiredServerEnvs.filter((key) => !process.env[key]);

  if (missing.length > 0) {
    throw new Error(
      `Missing server environment variables: ${missing.join(", ")}`,
    );
  }

  return {
    RESEND_API_KEY: process.env.RESEND_API_KEY!,
    RESEND_FROM_EMAIL: process.env.RESEND_FROM_EMAIL!,
    RESEND_TO_EMAIL: process.env.RESEND_TO_EMAIL!,
  };
}

export const serverEnv = getServerEnv();
