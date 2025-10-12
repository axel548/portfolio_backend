import Pricing, { IPricing } from '../models/pricing.model';

const pricingData: IPricing[] = [
  {
    lang: 'es',
    title: 'Planes Ficticios',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    plans: [
      {
        type: 'Básico',
        price: '$10',
        description: 'Lorem ipsum dolor sit amet.',
        features: [
          { feature: 'Característica 1', available: true },
          { feature: 'Característica 2', available: false },
          { feature: 'Característica 3', available: false },
        ],
        button: 'Comprar',
      },
      {
        type: 'Profesional',
        price: '$50',
        description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        features: [
          { feature: 'Característica 1', available: true },
          { feature: 'Característica 2', available: true },
          { feature: 'Característica 3', available: false },
        ],
        button: 'Comprar',
      },
      {
        type: 'Premium',
        price: '$100',
        description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        features: [
          { feature: 'Característica 1', available: true },
          { feature: 'Característica 2', available: true },
          { feature: 'Característica 3', available: true },
        ],
        button: 'Comprar',
      },
    ],
  } as IPricing,
  {
    lang: 'en',
    title: 'Fictional Plans',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    plans: [
      {
        type: 'Basic',
        price: '$10',
        description: 'Lorem ipsum dolor sit amet.',
        features: [
          { feature: 'Feature 1', available: true },
          { feature: 'Feature 2', available: false },
          { feature: 'Feature 3', available: false },
        ],
        button: 'Buy',
      },
      {
        type: 'Professional',
        price: '$50',
        description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        features: [
          { feature: 'Feature 1', available: true },
          { feature: 'Feature 2', available: true },
          { feature: 'Feature 3', available: false },
        ],
        button: 'Buy',
      },
      {
        type: 'Premium',
        price: '$100',
        description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        features: [
          { feature: 'Feature 1', available: true },
          { feature: 'Feature 2', available: true },
          { feature: 'Feature 3', available: true },
        ],
        button: 'Buy',
      },
    ],
  } as IPricing,
];

export const seedPricing = async () => {
  try {
    await Pricing.deleteMany({});
    const count = await Pricing.countDocuments({});

    if (count > 0) {
      console.log('Pricing data already exists, skipping seeding.');
      return;
    }
    await Pricing.insertMany(pricingData);
    console.log('Pricing data seeded successfully');
  } catch (error) {
    console.error('Error seeding Pricing data:', error);
  }
};
