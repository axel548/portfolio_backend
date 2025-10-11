import { Request, Response } from 'express';
import Technology from '../models/technology.model';

export const getTechnologies = async (req: Request, res: Response) => {
    try {
        const technologies = await Technology.find();
        res.json(technologies);
    } catch (err) {
        if (err instanceof Error) {
            console.error(err.message);
        }
        res.status(500).send('Server Error');
    }
};
