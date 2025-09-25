import { Schema, model, Document } from 'mongoose';

export interface IService extends Document {
    title: string;
    description: string;
    image?: string;
}

const ServiceSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String },
});

export default model<IService>('Service', ServiceSchema);
