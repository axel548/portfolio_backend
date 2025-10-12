
import puppeteer from 'puppeteer';
import { getCvTemplate } from '../templates/cv.template';
import ExperienceEducation from '../models/experience_education.model';
import PersonalInfo from '../models/personal-info.model';
import Skill from '../models/skill.model';
import Certification from '../models/certification.model';
import Contact from '../models/contact.model';
import fs from "fs";


export const generateCv = async (lang: string) => {
  try {

    console.log('Fetching data...');
    
    const personal_info = await PersonalInfo.findOne({ lang });
    const experience_education = await ExperienceEducation.findOne({ lang });
    const skills = await Skill.findOne({ lang });
    const certifications = await Certification.findOne({ lang });
    const contact = await Contact.findOne({ lang });

    console.log('Data fetched successfully: ', { personal_info, experience_education, skills, certifications });
    
    if (!personal_info || !experience_education || !skills || !certifications || !contact) {
      throw new Error('Missing data to generate CV');
    }

    const html = getCvTemplate(personal_info, experience_education, skills, certifications, contact);
    // // fs.writeFileSync("debug.html", html); 
    // // console.log("HTML dumped to debug.html");
    // // console.log('HTML generated: ', { html });

    console.log('Launching puppeteer...');
    // const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
    const browser = await puppeteer.launch({
      headless: true, // 👈 en v24 usar esta opción
      args: ["--no-sandbox", "--disable-setuid-sandbox"]
    });

    const page = await browser.newPage();
    console.log('Puppeteer launched successfully');

    await page.setContent(html, { waitUntil: 'domcontentloaded' });
    console.log('Content set');

    // const pdf = await page.pdf({ format: 'A4', printBackground: true });
    const pdf = await page.pdf({
      format: "Letter",
      printBackground: true,
      margin: { top: "10mm", bottom: "10mm", left: "10mm", right: "10mm" }
    });
    fs.writeFileSync("cv.pdf", pdf);
    console.log('PDF generated: ', { pdf });

    await browser.close();
    console.log('Browser closed');

    return pdf;
  } catch (error) {
    console.error('Error generating PDF:', error);
    throw new Error('Could not generate PDF');
  }
};
