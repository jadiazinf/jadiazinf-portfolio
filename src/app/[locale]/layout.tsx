import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { Providers } from "@/presentation/providers";
import { routing } from "@/infrastructure/i18n/config";
import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { DEFAULT_LOCALE } from "@/lib/constants";
import "../globals.css";

const BASE_URL = "https://jadiazinf.com";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

type TLayoutProps = {
  readonly children: ReactNode;
  readonly params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: TLayoutProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });

  const title = t("title");
  const description = t("description");
  const keywords = t("keywords");
  const url = locale === DEFAULT_LOCALE ? BASE_URL : `${BASE_URL}/${locale}`;

  return {
    metadataBase: new URL(BASE_URL),
    title,
    description,
    keywords,
    authors: [{ name: "Jesús Adolfo Díaz Centeno", url: BASE_URL }],
    creator: "Jesús Adolfo Díaz Centeno",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: url,
      languages: {
        en: `${BASE_URL}/en`,
        es: BASE_URL,
      },
    },
    openGraph: {
      title,
      description,
      type: "website",
      url,
      siteName: "Jesús Díaz — Software Engineer Portfolio",
      locale: locale === "es" ? "es_VE" : "en_US",
      alternateLocale: locale === "es" ? "en_US" : "es_VE",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

function JsonLd({ locale }: { locale: string }) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Jesús Adolfo Díaz Centeno",
    alternateName: ["Jesús Díaz", "jadiazinf"],
    url: BASE_URL,
    jobTitle:
      locale === "es"
        ? "Ingeniero de Software y Desarrollador Web Full Stack"
        : "Software Engineer & Full Stack Web Developer",
    description:
      locale === "es"
        ? "Ingeniero de Software y Desarrollador Web Full Stack especializado en React, Next.js, TypeScript y Node.js. Disponible para trabajo remoto a nivel global."
        : "Software Engineer and Full Stack Web Developer specializing in React, Next.js, TypeScript and Node.js. Available for remote work worldwide.",
    knowsAbout: [
      "Software Engineering",
      "Web Development",
      "Full Stack Development",
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Tailwind CSS",
      "Ruby on Rails",
      "Google Cloud",
      "REST APIs",
      "tRPC",
    ],
    knowsLanguage: ["es", "en"],
    workLocation: {
      "@type": "VirtualLocation",
      name: "Remote — Worldwide",
    },
    sameAs: [
      "https://github.com/jadiazinf",
      "https://www.linkedin.com/in/jes%C3%BAs-adolfo-d%C3%ADaz-centeno-66a447265",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Jesús Díaz — Software Engineer Portfolio",
    url: BASE_URL,
    inLanguage: ["es", "en"],
    author: { "@type": "Person", name: "Jesús Adolfo Díaz Centeno" },
    description:
      locale === "es"
        ? "Portafolio profesional de Jesús Adolfo Díaz Centeno — Ingeniero de Software y Desarrollador Web Full Stack"
        : "Professional portfolio of Jesús Adolfo Díaz Centeno — Software Engineer & Full Stack Web Developer",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}

export default async function LocaleLayout({ children, params }: TLayoutProps) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <JsonLd locale={locale} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <NextIntlClientProvider messages={messages}>
          <Providers>{children}</Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
