import { Request, Response } from 'express';
import Testimonial from '../models/testimonial.model';

export const getTestimonials = async (req: Request, res: Response) => {
  try {
    const lang = req.query.lang || 'es';
    const testimonials = await Testimonial.findOne({ lang });
    if (!testimonials) {
      return res.status(404).json({ message: 'Testimonials not found for the given language' });
    }
    res.json(testimonials);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};
