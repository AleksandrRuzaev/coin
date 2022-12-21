import { selector } from 'recoil';
import { CategoryType } from '../../enums';
import { CurrencyDataService } from '../../services/currency.data.service';
import {
    currentCurrency,
    currunciesToCompare,
} from '../settings/settings.store';
import { categories } from './home.store';

const selectedRates = selector({
    key: '[Home] Rates/Default',
    get: async ({ get }) => {
        const { value: base } = get(currentCurrency);
        const currencies = get(currunciesToCompare);

        return await CurrencyDataService.getLatestRates(base, currencies);
    },
});

const financialSources = selector({
    key: '[Home] Financial sources/State',
    get: ({ get }) => {
        const allCategories = get(categories);

        return allCategories.filter(
            (category) => category.category === CategoryType.Source,
        );
    },
});

const spendings = selector({
    key: '[Home] Spendings/State',
    get: ({ get }) => {
        const allCategories = get(categories);

        return allCategories.filter(
            (category) => category.category === CategoryType.Costs,
        );
    },
});

export { selectedRates, financialSources, spendings };
