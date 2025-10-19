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
  available_to_freelance: {
    status: boolean;
    label: string;
  };
  cv_button: {
    label: string;
    url: string;
  };
}

export interface ICompany extends Document {
  image: string;
  description: string;
}

export interface ICompanies extends Document {
  title: string;
  companies: ICompany[];
}

export interface IPersonalInfo extends Document {
  lang: string;
  hero: IHero;
  summary: ISummary;
  company: ICompanies;
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
  available_to_freelance: {
    status: { type: Boolean, required: true },
    label: { type: String, required: true },
  },
  cv_button: {
    label: { type: String, required: true },
    url: { type: String, required: true },
  },
});

const CompanySchema = new Schema<ICompanies>({
  title: { type: String, required: false },
  companies: [
    {
      image: { type: String, required: true },
      description: { type: String, required: true },
    }
  ]
});

const PersonalInfoSchema = new Schema<IPersonalInfo>({
  lang: { type: String, required: true },
  hero: { type: HeroSchema, required: true },
  summary: { type: SummarySchema, required: true },
  company: { type: CompanySchema, required: true },
});

export default model<IPersonalInfo>('PersonalInfo', PersonalInfoSchema);