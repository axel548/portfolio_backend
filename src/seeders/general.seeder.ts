import General, { IGeneral } from '../models/general.model';

const generalData: IGeneral[] = [
    {
        lang: 'es',
        navbar: new Map([['home', 'Inicio'], ['about', 'Sobre mí']]),
        hire_me: 'Contrátame',
        copyright: '© 2025 John Doe. Todos los derechos reservados.'
    } as IGeneral,
    {
        lang: 'en',
        navbar: new Map([['home', 'Home'], ['about', 'About me']]),
        hire_me: 'Hire me',
        copyright: '© 2025 John Doe. All rights reserved.'
    } as IGeneral
];

export const seedGeneral = async () => {
    try {
        await General.deleteMany({});
        const count = await General.countDocuments({});

        if (count > 0) {
            console.log('General data already exists, skipping seeding.');
            return;
        }
        await General.insertMany(generalData);
        console.log('General data seeded successfully');
    } catch (error) {
        console.error('Error seeding General data:', error);
    }
};
