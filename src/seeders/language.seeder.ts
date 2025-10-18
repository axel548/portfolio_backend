import Language, { ILanguages } from '../models/language.model';

const languagesData: ILanguages[] = [
    {
      lang: 'es',
      languages: [
        { name: 'Español', code: 'es' },
        { name: 'Inglés', code: 'en' },
      ],
    } as ILanguages,
    {
      lang: 'en',
      languages: [
        { name: 'Spanish', code: 'es' },
        { name: 'English', code: 'en' },
      ],
    } as ILanguages,
  ];

export const seedLanguages = async () => {
    try {
        await Language.deleteMany({});
        await Language.collection.dropIndexes();
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
