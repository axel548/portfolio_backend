import { Request, Response } from 'express';
import LetsTalk from '../models/lets-talk.model';

export const getLetsTalk = async (req: Request, res: Response) => {
    try {
        const lang = req.query.lang || 'es';
        const letsTalk = await LetsTalk.findOne({ lang });
        if (!letsTalk) {
            return res.status(404).json({ msg: 'LetsTalk data not found for the specified language' });
        }
        res.json(letsTalk);
    } catch (err) {
        if (err instanceof Error) {
            console.error(err.message);
        }
        res.status(500).send('Server Error');
    }
};

export const updateLetsTalk = async (req: Request, res: Response) => {
    const { lang, title, description, button } = req.body;

    try {
        let letsTalk = await LetsTalk.findOne({ lang });

        if (!letsTalk) {
            return res.status(404).json({ msg: 'LetsTalk data not found for the specified language' });
        }

        letsTalk.title = title || letsTalk.title;
        letsTalk.description = description || letsTalk.description;
        letsTalk.button = button || letsTalk.button;

        await letsTalk.save();

        res.json(letsTalk);
    } catch (err) {
        if (err instanceof Error) {
            console.error(err.message);
        }
        res.status(500).send('Server Error');
    }
};