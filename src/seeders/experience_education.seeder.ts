import ExperienceEducation, { IExperienceEducation, IExperience, IEducation } from '../models/experience_education.model';

const experienceEducationData = [
  {
    lang: 'es',
    experience: [
      {
        start_date: '2023-01',
        end_date: 'Presente',
        title: 'DevOps Engineer - INNAPP',
        description: 'Automatización de despliegues con GitHub Actions, Terraform y ArgoCD.',
        company: 'INNAPP',
        details: [
          'Implementación de pipelines CI/CD para aplicaciones microservicios.',
          'Gestión de infraestructura en AWS utilizando Terraform.',
          'Monitoreo y logging con Prometheus y Grafana.',
        ],
        technologies: ['GitHub Actions', 'Terraform', 'ArgoCD', 'AWS', 'Docker', 'Kubernetes'],
      } as IExperience,
      {
        start_date: '2022-01',
        end_date: '2022-12',
        title: 'Analista QA - IT Profis',
        description: 'Diseño de pruebas automatizadas y validación de integraciones API.',
        company: 'IT Profis',
        details: [
          'Desarrollo de scripts de prueba automatizados con Selenium y Postman.',
          'Ejecución de pruebas de regresión y generación de reportes de calidad.',
          'Colaboración con equipos de desarrollo para resolver defectos.',
        ],
        technologies: ['Selenium', 'Postman', 'JIRA', 'Git'],
      } as IExperience,
    ],
    education: [
      {
        start_date: '2021',
        end_date: 'Actualidad',
        title: 'Ingeniería en Sistemas - Universidad Da Vinci',
        description: 'Enfocado en desarrollo de software, redes y computación en la nube.',
        institution: 'Universidad Da Vinci',
        details: [],
      } as IEducation,
    ],
  } as IExperienceEducation,
  {
    lang: 'en',
    experience: [
      {
        start_date: '2023-01',
        end_date: 'Present',
        title: 'DevOps Engineer - INNAPP',
        description: 'Deployment automation with GitHub Actions, Terraform and ArgoCD.',
        company: 'INNAPP',
        details: [
          'Implemented CI/CD pipelines for microservices applications.',
          'Managed AWS infrastructure using Terraform.',
          'Monitoring and logging with Prometheus and Grafana.',
        ],
        technologies: ['GitHub Actions', 'Terraform', 'ArgoCD', 'AWS', 'Docker', 'Kubernetes'],
      } as IExperience,
      {
        start_date: '2022-01',
        end_date: '2022-12',
        title: 'QA Analyst - IT Profis',
        description: 'Automated test design and API integration validation.',
        company: 'IT Profis',
        details: [
          'Developed automated test scripts using Selenium and Postman.',
          'Executed regression tests and generated quality reports.',
          'Collaborated with development teams to resolve defects.',
        ],
        technologies: ['Selenium', 'Postman', 'JIRA', 'Git'],
      } as IExperience,
    ],
    education: [
      {
        start_date: '2021',
        end_date: 'Present',
        title: 'Systems Engineering - Da Vinci University',
        description: 'Focused on software development, networks and cloud computing.',
        institution: 'Da Vinci University',
        details: [],
      } as IEducation,
    ],
  } as IExperienceEducation,
];

export const seedExperienceEducation = async () => {
  try {
    await ExperienceEducation.deleteMany({});
    const count = await ExperienceEducation.countDocuments();

    if (count > 0) {
      console.log('Experience and Education data already exists, skipping seeding.');
      return;
    }
    
    await ExperienceEducation.insertMany(experienceEducationData);

    console.log('Experience and Education data seeded successfully');
  } catch (error) {
    console.error('Error seeding Experience and Education data:', error);
  }
};