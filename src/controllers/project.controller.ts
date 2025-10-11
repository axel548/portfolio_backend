import { Request, Response } from 'express';
import Project from '../models/project.model';

export const getProjects = async (req: Request, res: Response) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (err) {
        if (err instanceof Error) {
            console.error(err.message);
        }
        res.status(500).send('Server Error');
    }
};
