import { Document, Schema, model } from 'mongoose';

export interface IWorkProject {
  image: string;
  categories: string[];
  title: string;
  description: string;
}

export interface IWorkBase {
  lang: string;
  title: string;
  description: string;
  categories: string[];
  projects: IWorkProject[];
}

export interface IWork extends IWorkBase, Document {}

const WorkProjectSchema = new Schema({
  image: { type: String, required: true },
  categories: { type: [String], required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
});

const WorkSchema = new Schema({
  lang: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  categories: { type: [String], required: true },
  projects: { type: [WorkProjectSchema], required: true },
});

export default model<IWork>('Work', WorkSchema);
