import { Schema, model, Document } from 'mongoose';

export interface ILetsTalk extends Document {
    lang: string;
    title: string;
    description: string;
    button: string;
}

const LetsTalkSchema = new Schema({
  lang: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  button: { type: String, required: true },
});

export default model<ILetsTalk>('LetsTalk', LetsTalkSchema);
