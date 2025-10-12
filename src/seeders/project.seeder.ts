import Project, { IProject } from '../models/project.model';

const projectsData: IProject[] = [
    {
        lang: 'es',
        title: 'Proyecto Ficticio 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        image: '/images/fake-project1.png',
        github: 'https://github.com/example/project1',
        manual: 'manual1.pdf'
    } as IProject,
    {
        lang: 'es',
        title: 'Proyecto Ficticio 2',
        description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: '/images/fake-project2.png',
        github: 'https://github.com/example/project2'
    } as IProject,
    {
        lang: 'en',
        title: 'Fictional Project 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        image: '/images/fake-project1.png',
        github: 'https://github.com/example/project1',
        manual: 'manual1.pdf'
    } as IProject,
    {
        lang: 'en',
        title: 'Fictional Project 2',
        description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: '/images/fake-project2.png',
        github: 'https://github.com/example/project2'
    } as IProject
];

export const seedProjects = async () => {
    try {
        await Project.deleteMany({});
        const count = await Project.countDocuments({});

        if (count > 0) {
            console.log('Project data already exists, skipping seeding.');
            return;
        }
        await Project.insertMany(projectsData);
        console.log('Project data seeded successfully');
    } catch (error) {
        console.error('Error seeding Project data:', error);
    }
};
