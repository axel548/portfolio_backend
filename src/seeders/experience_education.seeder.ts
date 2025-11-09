import ExperienceEducation, { IExperienceEducation, IExperience, IEducation } from '../models/experience_education.model';

const experienceEducationData = [
  {
    lang: 'es',
    experience: {
      title: 'Experiencia',
      experience: [
        {
          start_date: '2025-03',
          end_date: 'Actualidad',
          title: 'DevOps Jr & Desarrollador Backend - Pagalo - Rubro: Financiero',
          description: 'Soporte en la automatización de entornos cloud, CI/CD y despliegues seguros en Azure.',
          company: 'Págalo',
          details: [
            'Diseñé y desplegué pipelines CI/CD para servicios financieros críticos, garantizando despliegues seguros y auditables.',
            'Colaboré en la integración de sistemas de pago y servicios backend bajo un enfoque de microservicios.',
            'Implementé monitoreo de infraestructura y aplicaciones con Grafana y Prometheus para asegurar la disponibilidad de los servicios.',
            'Contribuí en la documentación técnica y estandarización de flujos de entrega continua para el equipo de ingeniería.',
          ],
          technologies: ['Bitbucket', 'Docker', 'Grafana', 'Prometheus', 'Linux', 'CI/CD',],
        } as IExperience,
        {
          start_date: '2022-06',
          end_date: '2025-03',
          title: 'Ingeniero DevOps & Desarrollador FullStack - INNAPP',
          description: 'Implementación de automatización CI/CD, despliegues en contenedores y monitoreo multicloud.',
          company: 'INNAPP',
          details: [
            'Diseñé e implementé pipelines CI/CD utilizando GitHub Actions y Terraform.',
            'Automatizé la infraestructura en Azure y AWS con Terraform, siguiendo buenas prácticas DevSecOps.',
            'Desplegué microservicios con ArgoCD y Kubernetes, integrando observabilidad con Prometheus, Grafana y Loki.',
            'Optimicé tiempos de entrega y despliegue mediante GitOps y testing automatizado.',
          ],
          technologies: ['Laravel', 'Node.js', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'ArgoCD', 'Prometheus', 'Grafana', 'Loki', 'AWS'],
        } as IExperience,
        // {
        //   start_date: '2022-07',
        //   end_date: '2023-03',
        //   title: 'Analista QA - IT Profis',
        //   description: 'Aseguramiento de calidad y automatización de pruebas en entornos CI/CD.',
        //   company: 'IT Profis',
        //   details: [
        //     'Ejecuté y documenté pruebas funcionales y de regresión para sistemas empresariales.',
        //     'Colaboré con equipos de desarrollo para identificar y corregir errores en etapas tempranas.',
        //     'Contribuí en la automatización de pruebas con herramientas de integración continua.',
        //   ],
        //   technologies: ['Jira', 'Postman', 'Git', 'Azure DevOps'],
        // } as IExperience,
        // {
        //   start_date: '2021-05',
        //   end_date: '2022-06',
        //   title: 'Desarrollador Laravel - Asesoría y Logística de Proyectos Internacionales',
        //   description: 'Desarrollo y mantenimiento de aplicaciones web con enfoque en eficiencia y escalabilidad.',
        //   company: 'Asesoría y Logística de Proyectos Internacionales',
        //   details: [
        //     'Desarrollé módulos backend con Laravel y MySQL para sistemas de gestión interna.',
        //     'Diseñé APIs REST seguras y documentadas para comunicación con sistemas externos.',
        //     'Implementé autenticación JWT y optimización de consultas SQL.',
        //   ],
        //   technologies: ['Laravel', 'PHP', 'MySQL', 'Git'],
        // } as IExperience,
      ],
    },
    education: {
      title: 'Educación',
      education: [
        {
          start_date: '2021',
          end_date: 'Actualidad',
          title: 'Ingeniería en Sistemas',
          description: 'Formación orientada al desarrollo de software, infraestructura en la nube y automatización de procesos DevOps.',
          institution: 'Universidad Da Vinci de Guatemala',
          details: [],
        } as IEducation,
      ],
    },
  } as IExperienceEducation,
  {
    lang: 'en',
    experience: {
      title: 'Experience',
      experience: [
        {
          start_date: '2023-01',
          end_date: 'Present',
          title: 'Software Engineer - Fictional Company',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          company: 'Fictional Company',
          details: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          ],
          technologies: ['React', 'Node.js', 'MongoDB', 'Docker'],
        } as IExperience,
        {
          start_date: '2022-01',
          end_date: '2022-12',
          title: 'Web Developer - Another Fictional Company',
          description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
          company: 'Another Fictional Company',
          details: [
            'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          ],
          technologies: ['Angular', 'Express', 'PostgreSQL', 'Git'],
        } as IExperience,
      ]
    },
    education: {
      title: 'Education',
      education: [
        {
          start_date: '2021',
          end_date: 'Present',
          title: 'Master in Computer Science - Imaginary University',
          description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
          institution: 'Imaginary University',
          details: [],
        } as IEducation,
      ]
    },
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