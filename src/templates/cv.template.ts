import { ILanguage } from '../models/language.model';
import { IProject } from '../models/project.model';
import { IService } from '../models/service.model';
import { ITechnology } from '../models/technology.model';

export const getCvTemplate = (
  language: ILanguage,
  projects: IProject[],
  services: IService[],
  technologies: ITechnology[]
) => {
  return ``;
};
