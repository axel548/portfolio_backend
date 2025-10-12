import Testimonial, { ITestimonial } from '../models/testimonial.model';

const testimonialData: ITestimonial[] = [
  {
    lang: 'es',
    title: 'Testimonios Ficticios',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    testimonials: [
      {
        name: 'Juan Pérez',
        role: 'Gerente de Proyecto',
        company: 'Empresa Ficticia',
        image: '/images/fake-testimonial1.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        name: 'María García',
        role: 'Diseñadora UX',
        company: 'Otra Empresa Ficticia',
        image: '/images/fake-testimonial2.png',
        description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
    ],
  } as ITestimonial,
  {
    lang: 'en',
    title: 'Fictional Testimonials',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    testimonials: [
      {
        name: 'John Doe',
        role: 'Project Manager',
        company: 'Fictional Company',
        image: '/images/fake-testimonial1.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        name: 'Jane Smith',
        role: 'UX Designer',
        company: 'Another Fictional Company',
        image: '/images/fake-testimonial2.png',
        description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
    ],
  } as ITestimonial,
];

export const seedTestimonials = async () => {
  try {
    await Testimonial.deleteMany({});
    const count = await Testimonial.countDocuments({});

    if (count > 0) {
      console.log('Testimonial data already exists, skipping seeding.');
      return;
    }
    await Testimonial.insertMany(testimonialData);
    console.log('Testimonial data seeded successfully');
  } catch (error) {
    console.error('Error seeding Testimonial data:', error);
  }
};
