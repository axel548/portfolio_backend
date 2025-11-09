import Skill, { ISkillData } from '../models/skill.model';

const skillsData = [
  {
    lang: 'es',
    title: 'Habilidades',
    description: 'Mis principales habilidades técnicas y blandas.',
    skills: [
      // Languages & Frameworks
      { skill: 'JavaScript', category: 'language' },
      // { skill: 'PHP', category: 'language' },
      // { skill: 'TypeScript', category: 'language' },
      // { skill: 'Laravel', category: 'framework' },
      { skill: 'Node.js', category: 'runtime' },
      { skill: 'Go', category: 'language' },
      { skill: 'Python', category: 'language' },
      { skill: 'Java', category: 'language' },
  
      // DevOps Tools & Platforms
      { skill: 'Docker', category: 'containerization' },
      { skill: 'Kubernetes', category: 'orchestration' },
      { skill: 'Terraform', category: 'infrastructure_as_code' },
      { skill: 'GitHub Actions', category: 'ci_cd' },
      // { skill: 'ArgoCD', category: 'gitops' },
      { skill: 'Azure DevOps', category: 'ci_cd' },
      // { skill: 'Prometheus', category: 'monitoring' },
      { skill: 'Grafana', category: 'monitoring' },
      // { skill: 'Loki', category: 'observability' },
  
      // Cloud Providers
      { skill: 'Azure', category: 'cloud' },
      { skill: 'AWS', category: 'cloud' },
      { skill: 'DigitalOcean', category: 'cloud' },
  
      // Databases & Messaging
      { skill: 'MySQL', category: 'database' },
      { skill: 'Redis', category: 'database' },
      // { skill: 'DynamoDB', category: 'database' },
      // { skill: 'RabbitMQ', category: 'messaging' },
  
      // Soft Skills
      { skill: 'Trabajo en equipo', category: 'soft_skill' },
      { skill: 'Comunicación', category: 'soft_skill' },
      { skill: 'Organización', category: 'soft_skill' },
      // { skill: 'Solucion de Problemas', category: 'soft_skill' },
      // { skill: 'Aprendizaje Continuo', category: 'soft_skill' },
    ],
  } as ISkillData,
  {
    lang: 'en',
    title: 'Skills',
    description: 'Core technical and DevOps skills focused on automation, cloud, and software delivery.',
    skills: [
      // Languages & Frameworks
      { skill: 'JavaScript', category: 'language' },
      // { skill: 'PHP', category: 'language' },
      // { skill: 'TypeScript', category: 'language' },
      // { skill: 'Laravel', category: 'framework' },
      { skill: 'Node.js', category: 'runtime' },
      { skill: 'Go', category: 'language' },
      { skill: 'Python', category: 'language' },
      { skill: 'Java', category: 'language' },
  
      // DevOps Tools & Platforms
      { skill: 'Docker', category: 'containerization' },
      { skill: 'Kubernetes', category: 'orchestration' },
      { skill: 'Terraform', category: 'infrastructure_as_code' },
      { skill: 'GitHub Actions', category: 'ci_cd' },
      // { skill: 'ArgoCD', category: 'gitops' },
      { skill: 'Azure DevOps', category: 'ci_cd' },
      // { skill: 'Prometheus', category: 'monitoring' },
      { skill: 'Grafana', category: 'monitoring' },
      // { skill: 'Loki', category: 'observability' },
  
      // Cloud Providers
      { skill: 'Azure', category: 'cloud' },
      { skill: 'AWS', category: 'cloud' },
      { skill: 'DigitalOcean', category: 'cloud' },
  
      // Databases & Messaging
      { skill: 'MySQL', category: 'database' },
      { skill: 'Redis', category: 'database' },
      // { skill: 'DynamoDB', category: 'database' },
      // { skill: 'RabbitMQ', category: 'messaging' },
  
      // Soft Skills
      { skill: 'Teamwork', category: 'soft_skill' },
      { skill: 'Problem Solving', category: 'soft_skill' },
      // { skill: 'Communication', category: 'soft_skill' },
      // { skill: 'Continuous Learning', category: 'soft_skill' },
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
