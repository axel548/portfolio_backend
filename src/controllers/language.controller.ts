import { Request, Response } from 'express';
import Language from '../models/language.model';

export const getLanguages = async (req: Request, res: Response) => {
    try {
        const lang = req.query.lang || 'es';
        const languages = await Language.findOne({ lang});
        res.json(languages);
    } catch (err) {
        if (err instanceof Error) {
            console.error(err.message);
        }
        res.status(500).send('Server Error');
    }
};