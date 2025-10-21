import Service, { IService } from '../models/service.model';

const servicesData: IService[] = [
    {
        lang: 'es',
        title: 'Servicios Ficticios',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        services: [
            {
                title: 'Desarrollo Web',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                icon: 'code',
                price: '0',
            },
            {
                title: 'Diseño Gráfico',
                description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                icon: 'pen',
                price: '0',
            },
            {
                title: 'Marketing Digital',
                description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                icon: 'chart-bar',
                price: '0',
            }
        ]
    } as IService,
    {
        lang: 'en',
        title: 'Fictional Services',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        services: [
            {
                title: 'Web Development',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                icon: 'code',
                price: '0',
            },
            {
                title: 'Graphic Design',
                description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                icon: 'pen',
                price: '0',
            },
            {
                title: 'Digital Marketing',
                description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                icon: 'chart-bar',
                price: '0',
            }
        ]
    } as IService
];

export const seedServices = async () => {
    try {
        await Service.deleteMany({});
        const count = await Service.countDocuments({});

        if (count > 0) {
            console.log('Service data already exists, skipping seeding.');
            return;
        }
        await Service.insertMany(servicesData);
        console.log('Service data seeded successfully');
    } catch (error) {
        console.error('Error seeding Service data:', error);
    }
};
