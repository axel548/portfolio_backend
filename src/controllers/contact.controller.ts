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

export const updateContact = async (req: Request, res: Response) => {
    const { lang, title, description, info, form } = req.body;

    try {
        let contact = await Contact.findOne({ lang });

        if (!contact) {
            return res.status(404).json({ msg: 'Contact data not found for the specified language' });
        }

        contact.title = title || contact.title;
        contact.description = description || contact.description;
        contact.info = info || contact.info;
        contact.form = form || contact.form;

        await contact.save();

        res.json(contact);
    } catch (err) {
        if (err instanceof Error) {
            console.error(err.message);
        }
        res.status(500).send('Server Error');
    }
};