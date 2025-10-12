import Language, { ILanguage } from '../models/language.model';

const languagesData: ILanguage[] = [
    { name: 'Spanish', code: 'es' } as ILanguage,
    { name: 'English', code: 'en' } as ILanguage
];

export const seedLanguages = async () => {
    try {
        await Language.deleteMany({});
        const count = await Language.countDocuments({});

        if (count > 0) {
            console.log('Language data already exists, skipping seeding.');
            return;
        }
        await Language.insertMany(languagesData);
        console.log('Language data seeded successfully');
    } catch (error) {
        console.error('Error seeding Language data:', error);
    }
};
