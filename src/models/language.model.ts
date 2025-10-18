import { Schema, model, Document } from 'mongoose';

export interface ILanguage {
  name: string;
  code: string;
}

export interface ILanguages extends Document {
  lang: string;
  languages: ILanguage[];
}

const LanguageSchema = new Schema<ILanguages>({
  lang: { type: String, required: true, unique: true },
  languages: [
    {
      name: { type: String, required: true },
      code: { type: String, required: true },
    },
  ],
});

export default model<ILanguages>('Language', LanguageSchema);
