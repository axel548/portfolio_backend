import { Request, Response } from 'express';
import Certification from '../models/certification.model';

export const getCertifications = async (req: Request, res: Response) => {
  const lang = req.query.lang || 'es';
  try {
    const certifications = await Certification.findOne({ lang });
    if (!certifications) {
      return res.status(404).json({ message: 'Certifications not found' });
    }
    res.json(certifications);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};