import { Request, Response } from "express";
import About from "../models/about.model";

export const getAbout = async (req: Request, res: Response) => {
  const lang = req.query.lang || "es";
  try {
    const about = await About.findOne({ lang });
    if (about) {
      res.json(about);
    } else {
      res.status(404).send("About not found for the specified language");
    }
  } catch (error) {
    res.status(500).send("Error fetching about data");
  }
};

export const updateAbout = async (req: Request, res: Response) => {
    const { lang, title, description, button } = req.body;

    try {
        let about = await About.findOne({ lang });

        if (!about) {
            return res.status(404).json({ msg: 'About data not found for the specified language' });
        }

        about.title = title || about.title;
        about.description = description || about.description;
        about.button = button || about.button;

        await about.save();

        res.json(about);
    } catch (err) {
        if (err instanceof Error) {
            console.error(err.message);
        }
        res.status(500).send('Server Error');
    }
};
