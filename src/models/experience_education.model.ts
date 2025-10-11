import { Schema, model } from 'mongoose';

const ExperienceEducationSchema = new Schema({
  lang: { type: String, required: true },
  experience: [
    {
      start_date: { type: String, required: true },
      end_date: { type: String, required: true },
      title: { type: String, required: true },
      description: { type: String, required: true },
    },
  ],
  education: [
    {
      start_date: { type: String, required: true },
      end_date: { type: String, required: true },
      title: { type: String, required: true },
      description: { type: String, required: true },
    },
  ],
});

export const ExperienceEducation = model('ExperienceEducation', ExperienceEducationSchema);