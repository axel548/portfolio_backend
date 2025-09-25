import { Request, Response } from 'express';
import Service, { IService } from '../models/service.model';

export const seedServices = async () => {
    try {
        const count = await Service.countDocuments();
        if (count === 0) {
            const services: IService[] = [
                {
                    title: 'Web Development',
                    description: 'I build websites and web applications.',
                    image: 'web.jpg'
                } as IService,
                {
                    title: 'Mobile Development',
                    description: 'I build mobile applications for Android and iOS.',
                    image: 'mobile.jpg'
                } as IService
            ];
            await Service.insertMany(services);
            console.log('Services seeded');
        }
    } catch (err) {
        if (err instanceof Error) {
            console.error(err.message);
        }
    }
};

export const getServices = async (req: Request, res: Response) => {
    try {
        const services = await Service.find();
        res.json(services);
    } catch (err) {
        if (err instanceof Error) {
            console.error(err.message);
        }
        res.status(500).send('Server Error');
    }
};
