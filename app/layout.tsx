"use client";

import { I18nextProvider } from "react-i18next";
import i18n from "../i18n"; // path to your i18n.ts
import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
      </body>
    </html>
  );
}
