import { Schema, model, Document } from 'mongoose';

export interface IHero extends Document {
  name: string;
  description: string;
  image: string;
  linkedin: string;
  github: string;
}

export interface ISummary extends Document {
  greeting: string;
  description: string;
  available_to_freelance: boolean;
  cv_button: {
    label: string;
    url: string;
  };
}

export interface ICompany extends Document {
  image: string;
  description: string;
}

export interface IPersonalInfo extends Document {
  lang: string;
  hero: IHero;
  summary: ISummary;
  companies: ICompany[];
}

const HeroSchema = new Schema<IHero>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  linkedin: { type: String, required: true },
  github: { type: String, required: true },
});

const SummarySchema = new Schema<ISummary>({
  greeting: { type: String, required: true },
  description: { type: String, required: true },
  available_to_freelance: { type: Boolean, required: true },
  cv_button: {
    label: { type: String, required: true },
    url: { type: String, required: true },
  },
});

const CompanySchema = new Schema<ICompany>({
  image: { type: String, required: true },
  description: { type: String, required: true },
});

const PersonalInfoSchema = new Schema<IPersonalInfo>({
  lang: { type: String, required: true },
  hero: { type: HeroSchema, required: true },
  summary: { type: SummarySchema, required: true },
  companies: { type: [CompanySchema], required: true },
});

export default model<IPersonalInfo>('PersonalInfo', PersonalInfoSchema);