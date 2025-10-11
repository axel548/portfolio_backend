import About, { IAbout } from '../models/about.model';

const aboutData: IAbout[] = [
    {
        lang: 'es',
        title: 'Sobre mí',
        description: 'Soy un apasionado del desarrollo backend, la infraestructura como código y la automatización de procesos DevOps.',
        button: 'Contáctame'
    } as IAbout,
    {
        lang: 'en',
        title: 'About me',
        description: 'I am passionate about backend development, infrastructure as code, and DevOps process automation.',
        button: 'Contact me'
    } as IAbout
];

export const seedAbout = async () => {
    const count = await About.countDocuments();
    if (count === 0) {
        await About.insertMany(aboutData);
        console.log('About data has been seeded');
    }
};