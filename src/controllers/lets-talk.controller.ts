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