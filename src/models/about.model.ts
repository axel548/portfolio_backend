import { Schema, model, Document } from 'mongoose';

export interface IAbout extends Document {
  lang: string;
  title: string;
  description: string;
  button: string;
}

const AboutSchema = new Schema<IAbout>({
  lang: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  button: { type: String, required: true },
});

export default model<IAbout>('About', AboutSchema);