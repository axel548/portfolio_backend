import { Schema, model, Document } from 'mongoose';

export interface ISkill {
  skill: string;
  category: string;
}

export interface ISkillData extends Document {
  lang: string;
  title: string;
  description: string;
  skills: ISkill[];
}

const SkillSchema = new Schema<ISkillData>({
  lang: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  skills: [
    {
      skill: { type: String, required: true },
      category: { type: String, required: true },
    },
  ],
});

export default model<ISkillData>('Skill', SkillSchema);
