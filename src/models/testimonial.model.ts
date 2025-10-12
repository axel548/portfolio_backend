import { Schema, model } from 'mongoose';

export interface ITestimonial {
  lang: string;
  title: string;
  description: string;
  testimonials: {
    name: string;
    role: string;
    company: string;
    image: string;
    description: string;
  }[];
}

const testimonialSchema = new Schema({
  lang: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  testimonials: [
    {
      name: { type: String, required: true },
      role: { type: String, required: true },
      company: { type: String, required: true },
      image: { type: String, required: true },
      description: { type: String, required: true },
    },
  ],
});

export default model<ITestimonial>('Testimonial', testimonialSchema);
