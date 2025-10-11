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
