import { Request, Response } from 'express';
import Contact from '../models/contact.model';

export const getContact = async (req: Request, res: Response) => {
  const lang = req.query.lang || 'es';

  try {
    const contact = await Contact.findOne({ lang });

    if (!contact) {
      return res.status(404).json({ message: 'Contact not found' });
    }

    res.json(contact);
  } catch (error) {
    res.status(500).json({ message: 'Error getting contact' });
  }
};