import { Request, Response } from 'express';
import Project, { IProject } from '../models/project.model';

export const seedProjects = async () => {
    try {
        const count = await Project.countDocuments();
        if (count === 0) {
            const projects: IProject[] = [
                {
                    title: 'Project 1',
                    description: 'This is the first project',
                    image: 'image1.jpg',
                    github: 'github.com/project1',
                    manual: 'manual1.pdf'
                } as IProject,
                {
                    title: 'Project 2',
                    description: 'This is the second project',
                    image: 'image2.jpg',
                    github: 'github.com/project2'
                } as IProject
            ];
            await Project.insertMany(projects);
            console.log('Projects seeded');
        }
    } catch (err) {
        if (err instanceof Error) {
            console.error(err.message);
        }
    }
};

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
