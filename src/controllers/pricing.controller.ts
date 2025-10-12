import { Request, Response } from 'express';
import Pricing from '../models/pricing.model';

export const getPricing = async (req: Request, res: Response) => {
  const lang = req.query.lang || 'es';
  const pricing = await Pricing.findOne({ lang });
  res.json(pricing);
};
