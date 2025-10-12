import Pricing from '../models/pricing.model';

export const seedPricing = async () => {
  const pricingES = {
    lang: 'es',
    title: 'Planes de Precios',
    description: 'Elige el plan que mejor se adapte a tus necesidades.',
    plans: [
      {
        type: 'Básico',
        price: '$50',
        description: 'Ideal para pequeñas páginas o ajustes iniciales.',
        features: [
          { feature: '1 página o sección', available: true },
          { feature: 'Hosting incluido', available: false },
          { feature: 'Soporte prioritario', available: false },
        ],
        button: 'Ordenar ahora',
      },
      {
        type: 'Profesional',
        price: '$150',
        description: 'Para proyectos medianos con integración de backend.',
        features: [
          { feature: '3 páginas personalizadas', available: true },
          { feature: 'Hosting incluido', available: true },
          { feature: 'Soporte prioritario', available: false },
        ],
        button: 'Ordenar ahora',
      },
      {
        type: 'Premium',
        price: '$300',
        description: 'Solución completa con despliegue automatizado.',
        features: [
          { feature: 'Full Stack + DevOps', available: true },
          { feature: 'Hosting y monitoreo', available: true },
          { feature: 'Soporte prioritario', available: true },
        ],
        button: 'Ordenar ahora',
      },
    ],
  };

  const pricingEN = {
    lang: 'en',
    title: 'Pricing Plans',
    description: 'Choose the plan that best suits your needs.',
    plans: [
      {
        type: 'Basic',
        price: '$50',
        description: 'Ideal for small pages or initial adjustments.',
        features: [
          { feature: '1 page or section', available: true },
          { feature: 'Hosting included', available: false },
          { feature: 'Priority support', available: false },
        ],
        button: 'Order now',
      },
      {
        type: 'Professional',
        price: '$150',
        description: 'For medium-sized projects with backend integration.',
        features: [
          { feature: '3 custom pages', available: true },
          { feature: 'Hosting included', available: true },
          { feature: 'Priority support', available: false },
        ],
        button: 'Order now',
      },
      {
        type: 'Premium',
        price: '$300',
        description: 'Complete solution with automated deployment.',
        features: [
          { feature: 'Full Stack + DevOps', available: true },
          { feature: 'Hosting and monitoring', available: true },
          { feature: 'Priority support', available: true },
        ],
        button: 'Order now',
      },
    ],
  };

  const pricingCount = await Pricing.countDocuments();
  console.log(`Pricing documents count: ${pricingCount}`);
  if (pricingCount > 0) return;
  console.log('Seeding pricing data...');
  await Pricing.create(pricingES);
  await Pricing.create(pricingEN);
};
