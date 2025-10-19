import { Request, Response } from 'express';
import PersonalInfo from '../models/personal-info.model';

export const getPersonalInfo = async (req: Request, res: Response) => {
  const lang = req.query.lang?.toString() || 'en';
  try {
    const personalInfo = await PersonalInfo.findOne({ lang });
    if (!personalInfo) {
      return res.status(404).json({ message: 'Personal info not found for the given language' });
    }
    res.json(personalInfo);
  } catch (err) {
    if (err instanceof Error) {
        console.error(err.message);
    }
        res.status(500).send('Server Error');
      }
    };
    
    export const updatePersonalInfo = async (req: Request, res: Response) => {
      const lang = req.body.lang;
      try {
        const personalInfo = await PersonalInfo.findOneAndUpdate({ lang }, req.body, { new: true });
        if (!personalInfo) {
          return res.status(404).json({ message: 'Personal info not found for the given language' });
        }
        res.json(personalInfo);
      } catch (err) {
        if (err instanceof Error) {
            console.error(err.message);
        }
        res.status(500).send('Server Error');
      }
    };
    