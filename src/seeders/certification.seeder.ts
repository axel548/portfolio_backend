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
        description: 'Certification in designing and implementing AI solutions using Azure Cognitive Services, Azure Bot Service, and Azure OpenAI.',
        link: 'https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/',
        category: 'certification',
      },
      {
        image: '/images/cert-az-204.png',
        title: 'Azure Developer Associate',
        description: 'Certification in developing, building, testing, and maintaining cloud applications on Microsoft Azure.',
        link: 'https://learn.microsoft.com/en-us/credentials/certifications/azure-developer/',
        category: 'certification',
      },
      {
        image: '/images/cert-az-400.png',
        title: 'Azure DevOps Engineer Expert',
        description: 'Certification in implementing DevOps processes, CI/CD pipelines, and automation across Azure environments.',
        link: 'https://learn.microsoft.com/en-us/credentials/certifications/devops-engineer/',
        category: 'certification',
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
        description: 'Certification in designing and implementing AI solutions using Azure Cognitive Services, Azure Bot Service, and Azure OpenAI.',
        link: 'https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/',
        category: 'certification',
      },
      {
        image: '/images/cert-az-204.png',
        title: 'Azure Developer Associate',
        description: 'Certification in developing, building, testing, and maintaining cloud applications on Microsoft Azure.',
        link: 'https://learn.microsoft.com/en-us/credentials/certifications/azure-developer/',
        category: 'certification',
      },
      {
        image: '/images/cert-az-400.png',
        title: 'Azure DevOps Engineer Expert',
        description: 'Certification in implementing DevOps processes, CI/CD pipelines, and automation across Azure environments.',
        link: 'https://learn.microsoft.com/en-us/credentials/certifications/devops-engineer/',
        category: 'certification',
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
