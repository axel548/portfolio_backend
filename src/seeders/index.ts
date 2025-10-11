import { disconnect } from 'mongoose';
import connectDB from '../config/database';
import { seedAbout } from './about.seeder';
import { seedExperienceEducation } from './experience_education.seeder';
import { seedPersonalInfo } from './personal-info.seeder';
import { seedTestimonials } from './testimonial.seeder';
import { seedProjects } from './project.seeder';
import { seedWorks } from './work.seeder';
import { seedServices } from './service.seeder';
import { seedTechnologies } from './technology.seeder';
import { seedLanguages } from './language.seeder';
import { seedGeneral } from './general.seeder';
import { seedLetsTalk } from './lets-talk.seeder';

const seedAll = async () => {
  try {
    await connectDB();
    await seedAbout();
    await seedExperienceEducation();
    await seedPersonalInfo();
    await seedTestimonials();
    await seedProjects();
    await seedWorks();
    await seedServices();
    await seedTechnologies();
    await seedLanguages();
    await seedGeneral();
    await seedLetsTalk();
    await disconnect();
    console.log('All data seeded successfully');
  } catch (error) {
    console.error('Error seeding all data:', error);
  }
};

seedAll();