import { Request, Response } from 'express';
import ExperienceEducation from '../models/experience_education.model';

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

export const updateExperienceEducation = async (req: Request, res: Response) => {
    const { lang, experience, education } = req.body;

    try {
        let data = await ExperienceEducation.findOne({ lang });

        if (!data) {
            return res.status(404).json({ msg: 'ExperienceEducation data not found for the specified language' });
        }

        data.experience = experience || data.experience;
        data.education = education || data.education;

        await data.save();

        res.json(data);
    } catch (err) {
        if (err instanceof Error) {
            console.error(err.message);
        }
        res.status(500).send('Server Error');
    }
};