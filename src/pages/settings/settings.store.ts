import { atom } from 'recoil';
import { Option } from '../../types/option.type';
import { currenciesOptions } from './settings.selector';

const currentCurrency = atom<Option<string>>({
    key: '[Settings] Current currency',
    default: {
        value: 'RSD',
        displayName: 'Serbian Dinar',
    },
});

const currunciesToCompare = atom<Array<Option<string>>>({
    key: '[Settings] Curruncies to compare',
    default: [
        {
            value: 'EUR',
            displayName: 'Euro',
        },
        {
            value: 'USD',
            displayName: 'United States Dollar',
        },
        {
            value: 'RUB',
            displayName: 'Russian Ruble',
        },
    ],
});

const currencyOptions = atom({
    key: '[Settings] Curruncies',
    default: currenciesOptions,
});

export { currentCurrency, currunciesToCompare, currencyOptions };
