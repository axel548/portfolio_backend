import LetsTalk, { ILetsTalk } from '../models/lets-talk.model';

const letsTalkData: ILetsTalk[] = [
    {
        lang: 'es',
        title: '¡Hablemos!',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        button: 'Enviar mensaje'
    } as ILetsTalk,
    {
        lang: 'en',
        title: 'Let\'s talk!',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        button: 'Send message'
    } as ILetsTalk
];

export const seedLetsTalk = async () => {
    try {
        await LetsTalk.deleteMany({});
        const count = await LetsTalk.countDocuments({});

        if (count > 0) {
            console.log('LetsTalk data already exists, skipping seeding.');
            return;
        }
        await LetsTalk.insertMany(letsTalkData);
        console.log('LetsTalk data seeded successfully');
    } catch (error) {
        console.error('Error seeding LetsTalk data:', error);
    }
};
