import { Request, Response } from 'express';
import Work from '../models/work.model';

export const getWorks = async (req: Request, res: Response) => {
    try {
      const lang = req.query.lang || 'es';
      const works = await Work.findOne({ lang: lang });
      if (!works) {
        return res.status(404).json({ message: 'Works not found for the specified language' });
      }
      res.json(works);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };