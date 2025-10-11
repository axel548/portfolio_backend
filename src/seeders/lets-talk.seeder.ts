import LetsTalk, { ILetsTalk } from '../models/lets-talk.model';

export const seedLetsTalk = async () => {
    try {
        const count = await LetsTalk.countDocuments();
        if (count === 0) {
            const letsTalkData: ILetsTalk[] = [
                {
                    lang: 'es',
                    title: '¡Hablemos!',
                    description: 'Estoy disponible para nuevos proyectos.',
                    button: 'Enviar mensaje'
                } as ILetsTalk,
                {
                    lang: 'en',
                    title: 'Let\'s talk!',
                    description: 'I am available for new projects.',
                    button: 'Send message'
                } as ILetsTalk
            ];
            await LetsTalk.insertMany(letsTalkData);
            console.log('LetsTalk data seeded');
        }
    } catch (err) {
        if (err instanceof Error) {
            console.error(err.message);
        }
    }
};
