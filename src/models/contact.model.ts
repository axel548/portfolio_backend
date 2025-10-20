import { Schema, model } from 'mongoose';

export interface IContact {
  lang: string;
  title: string;
  description: string;
  info: {
    address: {
      title: string;
      description: string;
      status: boolean;
    };
    phone: {
      title: string;
      description: string;
      status: boolean;
    };
    email: {
      title: string;
      description: string;
      status: boolean;
    };
    linkedin: {
      title: string;
      description: string;
      status: boolean;
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
      status: { type: Boolean, default: true },
    },
    phone: {
      title: { type: String, required: true },
      description: { type: String, required: true },
      status: { type: Boolean, default: true },
    },
    email: {
      title: { type: String, required: true },
      description: { type: String, required: true },
      status: { type: Boolean, default: true },
    },
    linkedin: {
      title: { type: String, required: true },
      description: { type: String, required: true },
      status: { type: Boolean, default: true },
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
