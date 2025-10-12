import { Schema, model } from 'mongoose';

export interface IPricing {
  lang: string;
  title: string;
  description: string;
  plans: {
    type: string;
    price: string;
    description: string;
    features: {
      feature: string;
      available: boolean;
    }[];
    button: string;
  }[];
}

const pricingSchema = new Schema({
  lang: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  plans: [
    {
      type: {
        type: String,
        required: true,
      },
      price: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      features: [
        {
          feature: {
            type: String,
            required: true,
          },
          available: {
            type: Boolean,
            required: true,
          },
        },
      ],
      button: {
        type: String,
        required: true,
      },
    },
  ],
});

export default model<IPricing>('Pricing', pricingSchema);
