import { Schema, model, Document } from 'mongoose';

export interface ICertification extends Document {
  lang: string;
  title: string;
  description: string;
  certifications: {
    image: string;
    title: string;
    description: string;
    link: string;
    category: string;
  }[];
}

const certificationSchema = new Schema<ICertification>({
  lang: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  certifications: [
    {
      image: { type: String, required: true },
      title: { type: String, required: true },
      description: { type: String, required: true },
      link: { type: String, required: true },
      category: { type: String, required: true },
    },
  ],
});

export default model<ICertification>('Certification', certificationSchema);