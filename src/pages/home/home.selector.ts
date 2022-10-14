import { selector } from 'recoil';
import { CurrencyDataService } from '../../services/currency.data.service';
import {
    currentCurrency,
    currunciesToCompare,
} from '../settings/settings.store';

const selectedRates = selector({
    key: '[Home] Rates/Default',
    get: async ({ get }) => {
        const { value: base } = get(currentCurrency);
        const currencies = get(currunciesToCompare);

        return await CurrencyDataService.getLatestRates(base, currencies);
    },
});

export { selectedRates };
