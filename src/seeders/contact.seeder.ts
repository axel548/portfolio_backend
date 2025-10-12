import Contact, { IContact } from '../models/contact.model';

const contactData: IContact[] = [
  {
    lang: 'es',
    title: 'Contacto',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    info: {
      address: {
        title: 'Ubicación',
        description: 'Ciudad Ficticia, País Imaginario',
      },
      phone: {
        title: 'Teléfono',
        description: '+00 1234 5678',
      },
      email: {
        title: 'Correo electrónico',
        description: 'correo@ficticio.com',
      },
      linkedin: {
        title: 'LinkedIn',
        description: '@ficticio',
      },
    },
    form: {
      name: 'Nombre',
      email: 'Correo electrónico',
      subject: 'Asunto',
      message: 'Mensaje',
      button: 'Enviar mensaje',
    },
  } as IContact,
  {
    lang: 'en',
    title: 'Contact',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    info: {
      address: {
        title: 'Location',
        description: 'Fictional City, Imaginary Country',
      },
      phone: {
        title: 'Phone',
        description: '+00 1234 5678',
      },
      email: {
        title: 'Email',
        description: 'fake@email.com',
      },
      linkedin: {
        title: 'LinkedIn',
        description: '@ficticio',
      },
    },
    form: {
      name: 'Name',
      email: 'Email',
      subject: 'Subject',
      message: 'Message',
      button: 'Send message',
    },
  } as IContact
];


export const seedContact = async () => {
  try {
    await Contact.deleteMany({});
    const count = await Contact.countDocuments({});

    if (count > 0) {
      console.log('Contact data already exists, skipping seeding.');
      return;
    }
    await Contact.insertMany(contactData);
    console.log('Contact data seeded successfully');
  } catch (error) {
    console.error('Error seeding Contact data:', error);
  }
};
