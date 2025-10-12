import Contact from '../models/contact.model';

export const seedContact = async () => {
  await Contact.deleteMany({});

  const contactES = new Contact({
    lang: 'es',
    title: 'Contacto',
    description: '¿Tienes un proyecto en mente? ¡Conversemos!',
    info: {
      address: {
        title: 'Ubicación',
        description: 'Guatemala',
      },
      phone: {
        title: 'Teléfono',
        description: '+502 1234 5678',
      },
      email: {
        title: 'Correo electrónico',
        description: 'contacto@gmail.site',
      },
    },
    form: {
      name: 'Nombre',
      email: 'Correo electrónico',
      subject: 'Asunto',
      message: 'Mensaje',
      button: 'Enviar mensaje',
    },
  });

  const contactEN = new Contact({
    lang: 'en',
    title: 'Contact',
    description: 'Do you have a project in mind? Let\'s talk!',
    info: {
      address: {
        title: 'Location',
        description: 'Guatemala',
      },
      phone: {
        title: 'Phone',
        description: '+502 1234 5678',
      },
      email: {
        title: 'Email',
        description: 'contacto@gmail.site',
      },
    },
    form: {
      name: 'Name',
      email: 'Email',
      subject: 'Subject',
      message: 'Message',
      button: 'Send message',
    },
  });

  await contactES.save();
  await contactEN.save();

  console.log('Contact seeder executed');
};
