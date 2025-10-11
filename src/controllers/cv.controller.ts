
import { Request, Response } from 'express';
import { generateCv } from '../services/cv.service';

export const getCv = async (req: Request, res: Response) => {
  try {
    const lang = req.query.lang as string || 'es';
    const pdf = await generateCv(lang);

    // res.setHeader('Content-Type', 'application/pdf');
    // res.setHeader('Content-Disposition', `attachment; filename=cv-${lang}.pdf`);
    // res.send(pdf);
    res.json({
      'pdf': 'generated successfully'
     });
  } catch (err) {
    if (err instanceof Error) {
        console.error(err.message);
        res.status(404).json({ msg: err.message });
    } else {
        res.status(500).send('Server Error');
    }
  }
};
