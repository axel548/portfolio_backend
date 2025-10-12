import Technology, { ITechnology } from '../models/technology.model';

const technologiesData: ITechnology[] = [
    {
        name: 'HTML5',
        icon: 'html5.svg'
    } as ITechnology,
    {
        name: 'CSS3',
        icon: 'css3.svg'
    } as ITechnology,
    {
        name: 'Sass',
        icon: 'sass.svg'
    } as ITechnology,
    {
        name: 'TypeScript',
        icon: 'typescript.svg'
    } as ITechnology
];

export const seedTechnologies = async () => {
    try {
        await Technology.deleteMany({});
        const count = await Technology.countDocuments({});

        if (count > 0) {
            console.log('Technology data already exists, skipping seeding.');
            return;
        }
        await Technology.insertMany(technologiesData);
        console.log('Technology data seeded successfully');
    } catch (error) {
        console.error('Error seeding Technology data:', error);
    }
};
