import { use } from "react";
import { Inter } from "next/font/google";
import "./../globals.css";

import Providers from "@/components/Providers";
import { locales } from "@/config/config";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import useTextDirection from "@/hooks/useTextDirection";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jhon Doe - Web Developer",
  description: "Welcome to my website",
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function RootLayout(props) {
  const params = use(props.params);

  const {
    locale
  } = params;

  const {
    children
  } = props;

  unstable_setRequestLocale(locale);
  const direction = useTextDirection(locale);
  const messages = useMessages();
  return (
    <html
    suppressHydrationWarning
      className={`${inter.className} font-montserrat`}
      lang={locale}
      dir={direction}
    >
      <NextIntlClientProvider locale={locale} messages={messages}>
        <Providers>{children}</Providers>
      </NextIntlClientProvider>
    </html>
  );
}
