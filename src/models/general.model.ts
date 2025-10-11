import { Schema, model, Document } from 'mongoose';

export interface IGeneral extends Document {
    lang: string;
    navbar: Map<string, string>;
    hire_me: string;
    copyright: string;
}

const GeneralSchema = new Schema({
  lang: { type: String, required: true, unique: true },
  navbar: { type: Map, of: String, required: true },
  hire_me: { type: String, required: true },
  copyright: { type: String, required: true },
});

export default model<IGeneral>('General', GeneralSchema);
