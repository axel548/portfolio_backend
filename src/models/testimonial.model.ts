import { Schema, model } from 'mongoose';

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

export const Testimonial = model('Testimonial', testimonialSchema);
