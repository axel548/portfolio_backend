import { Request, Response } from 'express';
import Skill from '../models/skill.model';

export const getSkills = async (req: Request, res: Response) => {
  const lang = req.query.lang || 'es';

  try {
    const skills = await Skill.findOne({ lang: lang || 'es' });
    if (!skills) {
      return res.status(404).json({ message: 'Skills not found' });
    }
    res.json(skills);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
