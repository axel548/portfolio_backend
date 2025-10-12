import { Schema, model, Document } from 'mongoose';

export interface IProject extends Document {
    lang: string;
    title: string;
    description: string;
    image: string;
    github: string;
    manual?: string;
}

const ProjectSchema = new Schema({
  lang: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  github: { type: String, required: true },
  manual: { type: String },
});

export default model<IProject>('Project', ProjectSchema);
