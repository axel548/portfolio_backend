import ExperienceEducation, { IExperienceEducation, IExperience, IEducation } from '../models/experience_education.model';

const experienceEducationData = [
  {
    lang: 'es',
    experience: {
      title: 'Experiencia',
      experience: [
        {
          start_date: '2023-01',
          end_date: 'Presente',
          title: 'Ingeniero de Software - Empresa Ficticia',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          company: 'Empresa Ficticia',
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
          title: 'Desarrollador Web - Otra Empresa Ficticia',
          description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
          company: 'Otra Empresa Ficticia',
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
          end_date: 'Actualidad',
          title: 'Maestría en Ciencias de la Computación - Universidad Imaginaria',
          description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
          institution: 'Universidad Imaginaria',
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