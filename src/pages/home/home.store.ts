import { atom } from 'recoil';
import { selectedRates } from './home.selector';

const rates = atom<Record<string, number>>({
    key: '[Home] Rates',
    default: selectedRates,
});

export { rates };
