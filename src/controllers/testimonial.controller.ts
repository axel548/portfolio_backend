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

export const updateTestimonial = async (req: Request, res: Response) => {
    const { lang, title, description, testimonials } = req.body;

    try {
        let testimonial = await Testimonial.findOne({ lang });

        if (!testimonial) {
            return res.status(404).json({ msg: 'Testimonial data not found for the specified language' });
        }

        testimonial.title = title || testimonial.title;
        testimonial.description = description || testimonial.description;
        testimonial.testimonials = testimonials || testimonial.testimonials;

        await testimonial.save();

        res.json(testimonial);
    } catch (err) {
        if (err instanceof Error) {
            console.error(err.message);
        }
        res.status(500).send('Server Error');
    }
};
