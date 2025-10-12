import { log } from 'console';
import Service, { IService } from '../models/service.model';

export const seedServices = async () => {
    try {
        const count = await Service.countDocuments();
        console.log('Services seeded: ', count);
        if (count === 0) {
            const services: IService[] = [
                {
                    lang: 'es',
                    title: 'Servicios',
                    description: 'Ofrezco soluciones personalizadas para desarrollo, automatización y despliegue.',
                    services: [
                        {
                            title: 'Desarrollo Backend',
                            description: 'APIs seguras y escalables con Laravel, Node.js y .NET.',
                            icon: 'code'
                        },
                        {
                            title: 'DevOps y Automatización',
                            description: 'Infraestructura como código, CI/CD y observabilidad.',
                            icon: 'cloud'
                        },
                        {
                            title: 'Consultoría Cloud',
                            description: 'Diseño y despliegue en AWS, Azure y DigitalOcean.',
                            icon: 'server'
                        }
                    ]
                } as IService,
                {
                    lang: 'en',
                    title: 'Services',
                    description: 'I offer custom solutions for development, automation, and deployment.',
                    services: [
                        {
                            title: 'Backend Development',
                            description: 'Secure and scalable APIs with Laravel, Node.js, and .NET.',
                            icon: 'code'
                        },
                        {
                            title: 'DevOps and Automation',
                            description: 'Infrastructure as code, CI/CD, and observability.',
                            icon: 'cloud'
                        },
                        {
                            title: 'Cloud Consulting',
                            description: 'Design and deployment on AWS, Azure, and DigitalOcean.',
                            icon: 'server'
                        }
                    ]
                } as IService
            ];
            await Service.insertMany(services);
            console.log('Services seeded');
        }
    } catch (err) {
        if (err instanceof Error) {
            console.error(err.message);
        }
    }
};
