// Client-safe environment variables (NEXT_PUBLIC_ prefixed)
// Can be imported from both server and client components

// eslint-disable-next-line @typescript-eslint/no-empty-object-type -- Will be populated when client env vars are added
type TClientEnv = {
  // Add NEXT_PUBLIC_ vars here, e.g.:
  // SITE_URL: string;
};

const requiredClientEnvs: (keyof TClientEnv)[] = [];

function getClientEnv(): TClientEnv {
  const missing = requiredClientEnvs.filter(
    (key) => !process.env[`NEXT_PUBLIC_${key}`],
  );

  if (missing.length > 0) {
    throw new Error(
      `Missing client environment variables: ${missing.map((k) => `NEXT_PUBLIC_${k}`).join(", ")}`,
    );
  }

  return {
    // Add vars here, e.g.:
    // SITE_URL: process.env.NEXT_PUBLIC_SITE_URL!,
  };
}

export const clientEnv = getClientEnv();
