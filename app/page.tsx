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
