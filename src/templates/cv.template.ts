import { IPersonalInfo } from '../models/personal-info.model';
import { IExperienceEducation } from '../models/experience_education.model';
import { ISkillData } from '../models/skill.model';
import { ICertification } from '../models/certification.model';
import { IContact } from '../models/contact.model';

export const getCvTemplate = (
    personal_info: IPersonalInfo,
    experience_education: IExperienceEducation,
    skills: ISkillData,
    certifications: ICertification,
    contact: IContact,
) => {
    const education_title = (experience_education.lang === 'en' ? 'Education' : 'Educación').toUpperCase();
    const certification_title = (experience_education.lang === 'en' ? 'Certtifications' : 'Certificaciones').toUpperCase();
    const skills_title = (experience_education.lang === 'en' ? 'Skills' : 'Habilidades').toUpperCase();
    const technologies_title = (experience_education.lang === 'en' ? 'Tecnologies' : 'Tecnologías').toUpperCase();
    const soft_skills_title = (experience_education.lang === 'en' ? 'Soft Skills' : 'Habilidades Blandas').toUpperCase();
    const work_title = (experience_education.lang === 'en' ? 'Experiencia Laboral' : 'Work Experience').toUpperCase();

    return `
  <!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CV - ${personal_info.hero.name}</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            line-height: 1.6;
            color: black;
            background-color: white;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 0 20px;
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 0 20px white;
        }
        h1, h2, h3 {
            border-bottom: 2px solid black;
            // padding-bottom: 10px;
            margin-top: 30px;
        }
        h1 {
            text-align: center;
            border-bottom: none;
            font-size: 1.2em;
            margin-bottom: 0;
        }
        h2 {
            font-size: 1em;
        }
        h1, h2, h3 {
            margin: 0;
        }
        .job{
            font-size: 0.9em;
        }
        
        
        .header-info {
            text-align: center;
            // margin-bottom: 30px;
        }
        .header-info a {
            color: black;
            text-decoration: none;
        }
        .header-info a:hover {
            text-decoration: underline;
        }
        .section {
            margin-bottom: 20px;
        }
        .job, .project, .education, .certification {
            margin-bottom: 20px;
        }
        .job-title, .project-title, .degree {
            font-weight: bold;
            font-size: 1.1em;
            color: black;
        }
        .company, .platform, .institution {
            font-style: italic;
        }
        .date {
            float: right;
        }
        ul {
            padding-left: 20px;
            list-style-type: disc;
        }
        .skills ul {
            list-style-type: none;
            padding: 0;
        }
        .skills li {
            display: inline-block;
            background-color: #e0eaf1;
            padding: 5px 10px;
            margin: 5px 5px 5px 0;
            border-radius: 5px;
            font-size: 0.9em;
        }
        strong {
            color: black;
        }
        .text_certifications {
            font-size: 0.9em;
        }
        .text_skills {
            margin: 0;
            font-size: 0.9em;
        }
        .detail_item_work_experience {
            margin: 0;
        }          
    </style>
</head>
<body>
    <div class="container">
        <h1>${personal_info.hero.name}</h1>
        <div class="header-info">
            ${personal_info.hero.description}<br>
            ${contact.info.phone.description} | ${contact.info.email.description} | ${contact.info.linkedin.description}
    </div>
    <div class="section education">
        <h2>${education_title}</h2>
        ${experience_education.education.map(edu => `
        <div class="education">
                <span class="date">${edu.end_date}</span>
                <div class="degree">${edu.title}</div>
                <div class="institution">${edu.institution}</div>
            </div>
            `).join('')}
    </div>
    <div class="section skills">
        <h2>${certification_title}</h2>
        <p class="text_skills">${certifications.certifications.map(tech => tech.title).join(', ')}</p>
    </div>
    <div class="section skills">
        <h2>${skills_title}</h2>
        <p class="text_skills"><strong>${technologies_title}</strong> ${skills.skills.filter(tech => tech.category == 'language' || tech.category == 'framework'  || tech.category == 'tool').map(tech => tech.skill).join(', ')}</p>
        <p class="text_skills"><strong>${soft_skills_title}:</strong> ${skills.skills.filter(tech => tech.category == 'soft_skill').map(tech => tech.skill).join(', ')}</p>
    </div>
    <div class="section experience">
        <h2>${work_title}</h2>
        ${experience_education.experience.map(exp => `
        <div class="job">
            <span class="date">${exp.start_date} – ${exp.end_date}</span>
            <div class="job-title">${exp.title}</div>
            <div class="company">${exp.company}</div>
            <ul class="detail_item_work_experience">
                ${exp.details.map(detail => `<li>${detail}</li>`).join('')}
                <li><strong>Tecnologías:</strong> ${exp.technologies.join(', ')}</li>
            </ul>
        </div>
        `).join('')}
    </div>
</body>
</html>
  `;
};