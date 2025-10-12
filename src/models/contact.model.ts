import { Schema, model } from 'mongoose';

export interface IContact {
  lang: string;
  title: string;
  description: string;
  info: {
    address: {
      title: string;
      description: string;
    };
    phone: {
      title: string;
      description: string;
    };
    email: {
      title: string;
      description: string;
    };
    linkedin: {
      title: string;
      description: string;
    };
  };
  form: {
    name: string;
    email: string;
    subject: string;
    message: string;
    button: string;
  };
}

const contactSchema = new Schema({
  lang: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  info: {
    address: {
      title: { type: String, required: true },
      description: { type: String, required: true },
    },
    phone: {
      title: { type: String, required: true },
      description: { type: String, required: true },
    },
    email: {
      title: { type: String, required: true },
      description: { type: String, required: true },
    },
    linkedin: {
      title: { type: String, required: true },
      description: { type: String, required: true },
    },
  },
  form: {
    name: { type: String, required: true },
    email: { type: String, required: true },
    subject: { type: String, required: true },
    message: { type: String, required: true },
    button: { type: String, required: true },
  },
});

export default model<IContact>('Contact', contactSchema);
