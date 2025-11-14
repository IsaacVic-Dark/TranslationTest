# Multilingual in Next js
A small Next.js project demonstrating a clean and practical implementation of multilingual translations. It showcases how to set up internationalization (i18n), configure language switching, and organize translation files in a scalable way for real-world applications.

### Project Installation

`git clone https://github.com/IsaacVic-Dark/TranslationTest.git`

`cd TranslationTest`

`npm install`

`npm run dev`



## Install i18n Library
NB: if you are installing in your own project 

`npm install next-i18next react-i18next i18next`

## Configure next-i18next
Create a configuration file at the root: `next-i18next.config.js`

``` ts
/** @type {import('next-i18next').I18NextConfig} */
module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pt'],
  },
  fallbackLng: 'en',
};
```

<!-- Update `next.config.js` to include it: -->

## Create Translation Files
Organize translations in a folder, e.g., `public/locales`.

```bash
public/
 └─ locales/
     ├─ en/
     │   └─ common.json
     └─ pt/
         └─ common.json
```

Example content of `common.json`:

in `en/common.json`
```json
{
  "welcome": "Welcome",
  "greeting": "Hello, how are you?"
}
```

in `pt/common.json`
```json
{
  "welcome": "Bem-vindo",
  "greeting": "Olá, como vai você?"
}
```

## Setup an I18n Provider
Create a file `i18n.ts` to initialize i18next:

```ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./public/locales/en/common.json";
import pt from "./public/locales/pt/common.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { common: en },
      pt: { common: pt },
    },
    lng: "en", // default language
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });

export default i18n;
```


## Setup layout.tsx if using App Router
Wrap your app with the I18nextProvider from react-i18next:

``` ts
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
```

## Using Translations and switch languages in Components
Use the useTranslation hook:

```ts
"use client";

import { useTranslation } from "react-i18next";

export default function Home() {
  const { t, i18n } = useTranslation("common");

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <div>
        <button onClick={() => changeLanguage("en")} className="border-2 bg-gray-200 rounded-lg p-2">English</button>
        <button onClick={() => changeLanguage("pt")} className="border-2 bg-gray-200 rounded-lg p-2">Português</button>
      </div>
      <h1>{t("welcome")}</h1>
      <p>{t("greeting")}</p>
    </div>
  );
}
```
