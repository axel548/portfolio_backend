import { Schema, model, Document } from 'mongoose';

export interface ITechnology extends Document {
    name: string;
    icon: string;
}

const TechnologySchema = new Schema({
  name: { type: String, required: true },
  icon: { type: String, required: true },
});

export default model<ITechnology>('Technology', TechnologySchema);
