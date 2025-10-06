
import puppeteer from 'puppeteer';
import { getCvTemplate } from '../templates/cv.template';
import Project, { IProject } from '../models/project.model';
import Service, { IService } from '../models/service.model';
import Technology, { ITechnology } from '../models/technology.model';
import translations from '../data/translations.json';
import fs from "fs";

import { Translation } from '../types';


interface Translations {
  [key: string]: Translation;
}

export const generateCv = async (lang: string) => {
  try {
    const typedTranslations = translations as Translations;
    const translation = typedTranslations[lang];

    if (!translation) {
      throw new Error('Language not found');
    }

    console.log('Fetching data...');
    const projects = await Project.find();
    const services = await Service.find();
    const technologies = await Technology.find();
    console.log('Data fetched successfully: ', { projects, services, technologies });

    const html = getCvTemplate(translation, projects, services, technologies);
    fs.writeFileSync("debug.html", html);
    console.log("HTML dumped to debug.html");
    console.log('HTML generated: ', { html });


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
      format: "A4",
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
