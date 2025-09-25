import { Request, Response } from 'express';
import Technology, { ITechnology } from '../models/technology.model';

export const seedTechnologies = async () => {
    try {
        const count = await Technology.countDocuments();
        if (count === 0) {
            const technologies: ITechnology[] = [
                {
                    name: 'JavaScript',
                    icon: 'javascript.svg'
                } as ITechnology,
                {
                    name: 'React',
                    icon: 'react.svg'
                } as ITechnology,
                {
                    name: 'Node.js',
                    icon: 'nodejs.svg'
                } as ITechnology,
                {
                    name: 'MongoDB',
                    icon: 'mongodb.svg'
                } as ITechnology
            ];
            await Technology.insertMany(technologies);
            console.log('Technologies seeded');
        }
    } catch (err) {
        if (err instanceof Error) {
            console.error(err.message);
        }
    }
};

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
