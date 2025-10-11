import General, { IGeneral } from '../models/general.model';

export const seedGeneral = async () => {
    try {
        const count = await General.countDocuments();
        if (count === 0) {
            const generalData: IGeneral[] = [
                {
                    lang: 'es',
                    navbar: new Map([['home', 'Inicio'], ['about', 'Sobre mí']]),
                    hire_me: 'Contrátame',
                    copyright: '© 2025 . Todos los derechos reservados.'
                } as IGeneral,
                {
                    lang: 'en',
                    navbar: new Map([['home', 'Home'], ['about', 'About me']]),
                    hire_me: 'Hire me',
                    copyright: '© 2025 . All rights reserved.'
                } as IGeneral
            ];
            await General.insertMany(generalData);
            console.log('General data seeded');
        }
    } catch (err) {
        if (err instanceof Error) {
            console.error(err.message);
        }
    }
};
