import PersonalInfo, { IPersonalInfo } from '../models/personal-info.model';

export const seedPersonalInfo = async () => {
    try {
        const count = await PersonalInfo.countDocuments();
        if (count === 0) {
            const personalInfo: IPersonalInfo[] = [
                {
                    lang: 'es',
                    hero: {
                        name: 'John Doe',
                        description: 'Profesional',
                        image: '/images/profile.png',
                        linkedin: 'https://linkedin.com/in/',
                        github: 'https://github.com/',
                    },
                    summary: {
                        greeting: '¡Hola!',
                        description: 'Profesional.',
                        available_to_freelance: true,
                        cv_button: {
                            label: 'Descargar CV',
                            url: 'https://web.site/cv.pdf',
                        },
                    },
                    companies: [
                        {
                            image: '/images/imagen.png',
                            description: 'Descripcion.',
                        },
                        {
                            image: '/images/imagen.png',
                            description: 'Descripcion.',
                        },
                    ],
                } as IPersonalInfo,
                {
                    lang: 'en',
                    hero: {
                        name: 'John Doe',
                        description: 'Profesional',
                        image: '/images/profile.png',
                        linkedin: 'https://linkedin.com/in/',
                        github: 'https://github.com/',
                    },
                    summary: {
                        greeting: 'Hi!',
                        description: 'Profesional.',
                        available_to_freelance: true,
                        cv_button: {
                            label: 'Download CV',
                            url: 'https://web.site/cv.pdf',
                        },
                    },
                    companies: [
                        {
                            image: '/images/imagen.png',
                            description: 'Descripcion.',
                        },
                        {
                            image: '/images/imagen.png',
                            description: 'Descripcion.',
                        },
                    ],
                } as IPersonalInfo
            ];
            await PersonalInfo.insertMany(personalInfo);
            console.log('Personal Info seeded');
        }
    } catch (err) {
        if (err instanceof Error) {
            console.error(err.message);
        }
    }
};
