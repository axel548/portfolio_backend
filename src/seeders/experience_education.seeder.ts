import { ExperienceEducation } from '../models/experience_education.model';

const experienceEducationData = [
  {
    lang: 'es',
    experience: [
      {
        start_date: '2023-01',
        end_date: 'Presente',
        title: 'DevOps Engineer - INNAPP',
        description: 'Automatización de despliegues con GitHub Actions, Terraform y ArgoCD.',
      },
      {
        start_date: '2022-01',
        end_date: '2022-12',
        title: 'Analista QA - IT Profis',
        description: 'Diseño de pruebas automatizadas y validación de integraciones API.',
      },
    ],
    education: [
      {
        start_date: '2021',
        end_date: 'Actualidad',
        title: 'Ingeniería en Sistemas - Universidad Da Vinci',
        description: 'Enfocado en desarrollo de software, redes y computación en la nube.',
      },
    ],
  },
  {
    lang: 'en',
    experience: [
      {
        start_date: '2023-01',
        end_date: 'Present',
        title: 'DevOps Engineer - INNAPP',
        description: 'Deployment automation with GitHub Actions, Terraform and ArgoCD.',
      },
      {
        start_date: '2022-01',
        end_date: '2022-12',
        title: 'QA Analyst - IT Profis',
        description: 'Automated test design and API integration validation.',
      },
    ],
    education: [
      {
        start_date: '2021',
        end_date: 'Present',
        title: 'Systems Engineering - Da Vinci University',
        description: 'Focused on software development, networks and cloud computing.',
      },
    ],
  },
];

export const seedExperienceEducation = async () => {
  try {
    await ExperienceEducation.deleteMany({});
    await ExperienceEducation.insertMany(experienceEducationData);
    console.log('Experience and Education data seeded successfully');
  } catch (error) {
    console.error('Error seeding Experience and Education data:', error);
  }
};