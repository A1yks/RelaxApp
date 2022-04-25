import Main from './Main';
import { FeelVariant } from './types';

export const feelVariants: FeelVariant[] = [
    {
        title: 'Спокойным',
        resourceName: 'calm',
    },
    {
        title: 'Расслабленным',
        resourceName: 'relax',
    },
    {
        title: 'Сосредоточенным',
        resourceName: 'focus',
    },
    {
        title: 'Взволнованным',
        resourceName: 'anxious',
        isPng: true,
    },
];

export default Main;
