import { atom } from 'recoil';
import { IconType } from '../../components/icon/icon.types';
import { CategoryType } from '../../enums';
import { CategoryDto } from '../../types';
import { selectedRates } from './home.selector';

const rates = atom<Record<string, number>>({
    key: '[Home] Rates',
    default: selectedRates,
});

const mockCategories = [
    {
        id: 1,
        title: 'Wallet',
        iconType: IconType.Wallet,
        amount: 725,
        category: CategoryType.Source,
    },
    {
        id: 2,
        title: 'Bank account',
        iconType: IconType.Bank,
        amount: 530,
        category: CategoryType.Source,
    },
    {
        id: 3,
        title: 'Travelling',
        iconType: IconType.Bank,
        amount: 200,
        category: CategoryType.Costs,
    },
    {
        id: 4,
        title: 'Food',
        iconType: IconType.Bank,
        amount: 150,
        category: CategoryType.Costs,
    },
];

const categories = atom<Array<CategoryDto>>({
    key: '[Home] Categories/State',
    default: mockCategories,
});

export { rates, categories };
