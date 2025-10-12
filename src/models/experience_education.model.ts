import { Schema, model } from 'mongoose';

export interface IExperience {
  start_date: string;
  end_date: string;
  title: string;
  description: string;
  company: string;
  details: string[];
  technologies: string[];
}

export interface IEducation {
  start_date: string;
  end_date: string;
  title: string;
  description: string;
  institution: string;
  details: string[];
}

export interface IExperienceEducation extends Document {
  lang: string;
  experience: IExperience[];
  education: IEducation[];
}

const ExperienceEducationSchema = new Schema({
  lang: { type: String, required: true },
  experience: [
    {
      start_date: { type: String, required: true },
      end_date: { type: String, required: true },
      title: { type: String, required: true },
      description: { type: String, required: true },
      company: { type: String, required: true },
      details: { type: [String], required: true },
      technologies: { type: [String], required: true },
    },
  ],
  education: [
    {
      start_date: { type: String, required: true },
      end_date: { type: String, required: true },
      title: { type: String, required: true },
      description: { type: String, required: true },
      institution: { type: String, required: true },
      details: { type: [String], required: false },
    },
  ],
});

export default model<IExperienceEducation>('ExperienceEducation', ExperienceEducationSchema);