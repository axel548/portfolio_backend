import { Request, Response } from 'express';
import Pricing, { IPricing } from '../models/pricing.model';

export const getPricing = async (req: Request, res: Response) => {
  const lang = req.query.lang || 'es';
  const pricing = await Pricing.findOne({ lang });
  res.json(pricing);
};

export const updatePricing = async (req: Request, res: Response) => {
  const lang = req.body.lang;
  const { title, description, plans }: IPricing = req.body;

  const pricing = await Pricing.findOneAndUpdate(
    { lang },
    { title, description, plans },
    { new: true, upsert: true }
  );

  res.json(pricing);
};
