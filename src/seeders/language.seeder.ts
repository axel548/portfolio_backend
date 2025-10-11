import Language, { ILanguage } from '../models/language.model';

export const seedLanguages = async () => {
    try {
        const count = await Language.countDocuments();
        if (count === 0) {
            const languages: ILanguage[] = [
                { name: 'Spanish', code: 'es' } as ILanguage,
                { name: 'English', code: 'en' } as ILanguage
            ];
            await Language.insertMany(languages);
            console.log('Languages seeded');
        }
    } catch (err) {
        if (err instanceof Error) {
            console.error(err.message);
        }
    }
};
