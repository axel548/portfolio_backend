import Skill, { ISkillData } from '../models/skill.model';

const skillsData = [
  {
    lang: 'es',
    title: 'Habilidades',
    description: 'Mis principales habilidades técnicas y blandas.',
    skills: [
      { skill: 'JavaScript', category: 'language' },
      { skill: 'PHP', category: 'language' },
      { skill: 'Laravel', category: 'framework' },
      { skill: 'Node.js', category: 'runtime' },
      { skill: 'Docker', category: 'tool' },
      { skill: 'Kubernetes', category: 'tool' },
      { skill: 'Trabajo en equipo', category: 'soft_skill' },
      { skill: 'Comunicación', category: 'soft_skill' },
    ],
  } as ISkillData,
  {
    lang: 'en',
    title: 'Skills',
    description: 'My main technical and soft skills.',
    skills: [
      { skill: 'JavaScript', category: 'language' },
      { skill: 'PHP', category: 'language' },
      { skill: 'Laravel', category: 'framework' },
      { skill: 'Node.js', category: 'runtime' },
      { skill: 'Docker', category: 'tool' },
      { skill: 'Kubernetes', category: 'tool' },
      { skill: 'Teamwork', category: 'soft_skill' },
      { skill: 'Communication', category: 'soft_skill' },
    ],
  } as ISkillData,
];

export const seedSkills = async () => {
  try {
    await Skill.deleteMany({});
    const count = await Skill.countDocuments({});

    if (count > 0) {
      console.log('Skill data already exists, skipping seeding.');
      return;
    }
    await Skill.insertMany(skillsData);
    console.log('Skill data seeded successfully');
  } catch (error) {
    console.error('Error seeding Skill data:', error);
  }
};
