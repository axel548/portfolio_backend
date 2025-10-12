import Work, { IWorkBase } from '../models/work.model';

const worksData: IWorkBase[] = [
  {
    lang: 'es',
    title: 'Proyectos Ficticios',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    categories: ['Diseño', 'Desarrollo', 'Marketing'],
    projects: [
      {
        image: '/images/fake-work1.png',
        categories: ['Diseño', 'Desarrollo'],
        title: 'Proyecto Uno',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        image: '/images/fake-work2.png',
        categories: ['Marketing'],
        title: 'Proyecto Dos',
        description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
    ],
  },
  {
    lang: 'en',
    title: 'Fictional Projects',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    categories: ['Design', 'Development', 'Marketing'],
    projects: [
      {
        image: '/images/fake-work1.png',
        categories: ['Design', 'Development'],
        title: 'Project One',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        image: '/images/fake-work2.png',
        categories: ['Marketing'],
        title: 'Project Two',
        description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
    ],
  },
];

export const seedWorks = async () => {
  try {
    await Work.deleteMany({});
    const count = await Work.countDocuments({});

    if (count > 0) {
      console.log('Work data already exists, skipping seeding.');
      return;
    }
    await Work.insertMany(worksData);
    console.log('Work data seeded successfully');
  } catch (error) {
    console.error('Error seeding Work data:', error);
  }
};
