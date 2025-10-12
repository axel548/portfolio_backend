import Certification, { ICertification } from '../models/certification.model';

const certificationsData = [
  {
    lang: 'es',
    title: 'Certificaciones',
    description: 'Certificaciones profesionales y formaciones relevantes.',
    certifications: [
      {
        image: '/images/cert-ai-102.png',
        title: 'Azure AI Engineer Associate',
        description: 'Certificación en servicios de IA en Azure.',
        link: 'https://www.microsoft.com/verify/ai-102',
        category: 'certification',
      },
      {
        image: '/images/cert-az-204.png',
        title: 'Azure Developer Associate',
        description: 'Desarrollo y despliegue en Azure.',
        link: 'https://www.microsoft.com/verify/az-204',
        category: 'certification',
      },
      {
        image: '/images/cert-docker.png',
        title: 'Docker Certified Associate',
        description: 'Capacitación en contenedores y orquestación.',
        link: 'https://example.com/docker-cert',
        category: 'tool',
      },
    ],
  } as ICertification,
  {
    lang: 'en',
    title: 'Certifications',
    description: 'Professional certifications and relevant training.',
    certifications: [
      {
        image: '/images/cert-ai-102.png',
        title: 'Azure AI Engineer Associate',
        description: 'Certification in Azure AI services.',
        link: 'https://www.microsoft.com/verify/ai-102',
        category: 'certification',
      },
      {
        image: '/images/cert-az-204.png',
        title: 'Azure Developer Associate',
        description: 'Development and deployment in Azure.',
        link: 'https://www.microsoft.com/verify/az-204',
        category: 'certification',
      },
      {
        image: '/images/cert-docker.png',
        title: 'Docker Certified Associate',
        description: 'Training in containers and orchestration.',
        link: 'https://example.com/docker-cert',
        category: 'tool',
      },
    ],
  } as ICertification,
];

export const seedCertifications = async () => {
  try {
    await Certification.deleteMany({});
    const count = await Certification.countDocuments({});

    if (count > 0) {
      console.log('Certification data already exists, skipping seeding.');
      return;
    }
    await Certification.insertMany(certificationsData);
    console.log('Certification data seeded successfully');
  } catch (error) {
    console.error('Error seeding Certification data:', error);
  }
};
