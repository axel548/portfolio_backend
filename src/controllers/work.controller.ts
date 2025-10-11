import { Request, Response } from 'express';
import Work, { IWork, IWorkBase } from '../models/work.model';

export const getWorks = async (req: Request, res: Response) => {
  try {
    const lang = req.query.lang || 'es';
    const works = await Work.findOne({ lang: lang });
    if (!works) {
      return res.status(404).json({ message: 'Works not found for the specified language' });
    }
    res.json(works);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const seedWorks = async () => {
  try {
    await Work.deleteMany({});

    const worksData: IWorkBase[] = [
      {
        lang: 'es',
        title: 'Proyectos Destacados',
        description: 'Una selección de proyectos en los que he trabajado recientemente.',
        categories: ['DevOps', 'Backend', 'Web', 'Cloud'],
        projects: [
          {
            image: '/images/devops-portfolio.png',
            categories: ['DevOps', 'Cloud'],
            title: 'Apperaser',
            description: 'Aplicación multicloud con infraestructura automatizada con Terraform y ArgoCD.',
          },
          {
            image: '/images/laravel-api.png',
            categories: ['Backend', 'API'],
            title: 'Laravel API Marketplace',
            description: 'API de pedidos con autenticación JWT, reportes y seguridad avanzada.',
          },
        ],
      },
      {
        lang: 'en',
        title: 'Featured Projects',
        description: 'A selection of projects I have recently worked on.',
        categories: ['DevOps', 'Backend', 'Web', 'Cloud'],
        projects: [
          {
            image: '/images/devops-portfolio.png',
            categories: ['DevOps', 'Cloud'],
            title: 'Apperaser',
            description: 'Multicloud application with automated infrastructure using Terraform and ArgoCD.',
          },
          {
            image: '/images/laravel-api.png',
            categories: ['Backend', 'API'],
            title: 'Laravel API Marketplace',
            description: 'Order API with JWT authentication, reports, and advanced security.',
          },
        ],
      },
    ];

    await Work.insertMany(worksData);
    console.log('Works seeded successfully!');
  } catch (error: any) {
    console.error('Error seeding works:', error);
  }
};
