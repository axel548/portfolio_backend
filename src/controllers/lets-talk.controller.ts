import { Request, Response } from 'express';
import LetsTalk, { ILetsTalk } from '../models/lets-talk.model';

export const seedLetsTalk = async () => {
    try {
        const count = await LetsTalk.countDocuments();
        if (count === 0) {
            const letsTalkData: ILetsTalk[] = [
                {
                    lang: 'es',
                    title: '¡Hablemos!',
                    description: 'Estoy disponible para nuevos proyectos.',
                    button: 'Enviar mensaje'
                } as ILetsTalk,
                {
                    lang: 'en',
                    title: 'Let\'s talk!',
                    description: 'I am available for new projects.',
                    button: 'Send message'
                } as ILetsTalk
            ];
            await LetsTalk.insertMany(letsTalkData);
            console.log('LetsTalk data seeded');
        }
    } catch (err) {
        if (err instanceof Error) {
            console.error(err.message);
        }
    }
};

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