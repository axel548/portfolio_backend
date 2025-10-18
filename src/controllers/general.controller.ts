import { Request, Response } from 'express';
import General from '../models/general.model';

export const getGeneral = async (req: Request, res: Response) => {
    try {
        const lang = req.query.lang || 'es';
        const general = await General.findOne({ lang });
        if (!general) {
            return res.status(404).json({ msg: 'General data not found for the specified language' });
        }
        res.json(general);
    } catch (err) {
        if (err instanceof Error) {
            console.error(err.message);
        }
        res.status(500).send('Server Error');
    }
};

export const updateGeneral = async (req: Request, res: Response) => {
    try {
        const lang = req.body.lang;
        const general = await General.findOneAndUpdate({ lang }, req.body, { new: true });
        if (!general) {
            return res.status(404).json({ msg: 'General data not found for the specified language' });
        }
        res.json(general);
    } catch (err) {
        if (err instanceof Error) {
            console.error(err.message);
        }
        res.status(500).send('Server Error');
    }
};