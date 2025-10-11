import { Request, Response } from 'express';
import General, { IGeneral } from '../models/general.model';

export const seedGeneral = async () => {
    try {
        const count = await General.countDocuments();
        if (count === 0) {
            const generalData: IGeneral[] = [
                {
                    lang: 'es',
                    navbar: new Map([['home', 'Inicio'], ['about', 'Sobre mí']]),
                    hire_me: 'Contrátame',
                    copyright: '© 2025 . Todos los derechos reservados.'
                } as IGeneral,
                {
                    lang: 'en',
                    navbar: new Map([['home', 'Home'], ['about', 'About me']]),
                    hire_me: 'Hire me',
                    copyright: '© 2025 . All rights reserved.'
                } as IGeneral
            ];
            await General.insertMany(generalData);
            console.log('General data seeded');
        }
    } catch (err) {
        if (err instanceof Error) {
            console.error(err.message);
        }
    }
};

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