import PersonalInfo, { IPersonalInfo } from '../models/personal-info.model';

const personalInfoData: IPersonalInfo[] = [
    {
        lang: 'es',
        hero: {
            name: 'Juan Pérez',
            description: 'Desarrollador de Software',
            image: '/images/fake-profile.png',
            linkedin: 'https://linkedin.com/in/juanperez',
            github: 'https://github.com/juanperez',
        },
        summary: {
            greeting: '¡Hola!',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            available_to_freelance: true,
            cv_button: {
                label: 'Descargar CV',
                url: 'https://example.com/cv.pdf',
            },
        },
        companies: [
            {
                image: '/images/fake-company1.png',
                description: 'Empresa Ficticia 1',
            },
            {
                image: '/images/fake-company2.png',
                description: 'Empresa Ficticia 2',
            },
        ],
    } as IPersonalInfo,
    {
        lang: 'en',
        hero: {
            name: 'John Doe',
            description: 'Software Developer',
            image: '/images/fake-profile.png',
            linkedin: 'https://linkedin.com/in/johndoe',
            github: 'https://github.com/johndoe',
        },
        summary: {
            greeting: 'Hi!',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            available_to_freelance: true,
            cv_button: {
                label: 'Download CV',
                url: 'https://example.com/cv.pdf',
            },
        },
        companies: [
            {
                image: '/images/fake-company1.png',
                description: 'Fictional Company 1',
            },
            {
                image: '/images/fake-company2.png',
                description: 'Fictional Company 2',
            },
        ],
    } as IPersonalInfo
];

export const seedPersonalInfo = async () => {
    try {
        await PersonalInfo.deleteMany({});
        const count = await PersonalInfo.countDocuments({});

        if (count > 0) {
            console.log('PersonalInfo data already exists, skipping seeding.');
            return;
        }
        await PersonalInfo.insertMany(personalInfoData);
        console.log('PersonalInfo data seeded successfully');
    } catch (error) {
        console.error('Error seeding PersonalInfo data:', error);
    }
};
