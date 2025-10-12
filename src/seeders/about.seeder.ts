import About, { IAbout } from '../models/about.model';

const aboutData: IAbout[] = [
    {
        lang: 'es',
        title: 'Sobre mí',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        button: 'Contáctame'
    } as IAbout,
    {
        lang: 'en',
        title: 'About me',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        button: 'Contact me'
    } as IAbout
];

export const seedAbout = async () => {
    try {
        await About.deleteMany({});
        const count = await About.countDocuments({});

        if (count > 0) {
            console.log('About data already exists, skipping seeding.');
            return;
        }
        await About.insertMany(aboutData);
        console.log('About data seeded successfully');
    } catch (error) {
        console.error('Error seeding About data:', error); 
    }
};