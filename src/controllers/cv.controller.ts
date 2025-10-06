
import { Request, Response } from 'express';
import { generateCv } from '../services/cv.service';

interface CvRequest extends Request {
  params: {
    lang: string;
  };
}

export const getCv = async (req: CvRequest, res: Response) => {
  try {
    const { lang } = req.params;
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
