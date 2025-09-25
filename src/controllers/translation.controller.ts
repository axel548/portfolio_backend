import { Request, Response } from "express";
import translations from "../data/translations.json";

interface Translation {
  title: string;
  subtitle: string;
}

interface Translations {
  [key: string]: Translation;
}

// 🔹 Tipamos explícitamente los params
interface LangRequest extends Request {
  params: {
    lang: string;
  };
}

export const getTranslations = (req: LangRequest, res: Response) => {
  const { lang } = req.params;
  const typedTranslations = translations as Translations;

  if (typedTranslations[lang]) {
    res.json(typedTranslations[lang]);
  } else {
    res.status(404).json({ msg: "Language not found" });
  }
};
