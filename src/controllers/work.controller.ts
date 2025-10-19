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

export const updateWork = async (req: Request, res: Response) => {
    const { lang, title, description, categories, projects } = req.body;

    try {
        let work = await Work.findOne({ lang });

        if (!work) {
            return res.status(404).json({ msg: 'Work data not found for the specified language' });
        }

        work.title = title || work.title;
        work.description = description || work.description;
        work.categories = categories || work.categories;
        work.projects = projects || work.projects;

        await work.save();

        res.json(work);
    } catch (err) {
        if (err instanceof Error) {
            console.error(err.message);
        }
        res.status(500).send('Server Error');
    }
};