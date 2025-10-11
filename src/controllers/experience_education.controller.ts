import { Request, Response } from 'express';
import { ExperienceEducation } from '../models/experience_education.model';

export const getExperienceEducation = async (req: Request, res: Response) => {
  const lang = req.query.lang || 'es';

  try {
    const data = await ExperienceEducation.findOne({ lang });
    if (!data) {
      return res.status(404).json({ message: 'Data not found for the specified language' });
    }
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching data', error });
  }
};