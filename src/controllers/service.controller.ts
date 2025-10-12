import { Request, Response } from 'express';
import Service from '../models/service.model';

export const getServices = async (req: Request, res: Response) => {
    try {
        const lang = req.query.lang || 'en';
        const services = await Service.findOne({ lang });
        res.json(services);
    } catch (err) {
        if (err instanceof Error) {
            console.error(err.message);
        }
        res.status(500).send('Server Error');
    }
};
