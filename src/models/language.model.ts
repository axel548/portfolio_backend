import { Schema, model, Document } from 'mongoose';

export interface ILanguage extends Document {
    name: string;
    code: string;
}

const LanguageSchema = new Schema({
  name: { type: String, required: true },
  code: { type: String, required: true, unique: true },
});

export default model<ILanguage>('Language', LanguageSchema);