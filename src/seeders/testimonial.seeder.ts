import Testimonial from '../models/testimonial.model';

const testimonialData = {
  es: {
    lang: 'es',
    title: 'Testimonios',
    description: 'Lo que dicen mis colegas y clientes sobre mi trabajo.',
    testimonials: [
      {
        name: 'Carlos Gómez',
        role: 'CTO',
        company: 'TechCorp',
        image: '/images/testimonial1.png',
        description: 'Axel es un profesional excepcional con gran dominio de las tecnologías DevOps.',
      },
      {
        name: 'María Pérez',
        role: 'Project Manager',
        company: 'INNAPP',
        image: '/images/testimonial2.png',
        description: 'Su capacidad para automatizar procesos nos ahorró semanas de trabajo.',
      },
    ],
  },
  en: {
    lang: 'en',
    title: 'Testimonials',
    description: 'What my colleagues and clients say about my work.',
    testimonials: [
      {
        name: 'Carlos Gomez',
        role: 'CTO',
        company: 'TechCorp',
        image: '/images/testimonial1.png',
        description: 'Axel is an exceptional professional with great command of DevOps technologies.',
      },
      {
        name: 'Maria Perez',
        role: 'Project Manager',
        company: 'INNAPP',
        image: '/images/testimonial2.png',
        description: 'His ability to automate processes saved us weeks of work.',
      },
    ],
  },
};

export const seedTestimonials = async () => {
  try {
    await Testimonial.deleteMany({});
    await Testimonial.insertMany([testimonialData.es, testimonialData.en]);
    console.log('Testimonials seeded successfully');
  } catch (error) {
    console.error('Error seeding testimonials:', error);
  }
};
