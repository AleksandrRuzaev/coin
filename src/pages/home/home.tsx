import React from 'react';
import { useRecoilValue } from 'recoil';
import {
    currentCurrency,
    currunciesToCompare,
} from '../settings/settings.store';
import { rates } from './home.store';

const Home: React.FC = (): JSX.Element => {
    const compareCurrencies = useRecoilValue(currunciesToCompare);
    const currency = useRecoilValue(currentCurrency);
    const currenciesRates = useRecoilValue(rates);

    return (
        <React.Suspense fallback={<div>Loading</div>}>
            <h3>Currency:</h3>
            <p>{currency.displayName}</p>
            <h3>Currencies to compare:</h3>
            {compareCurrencies.map((currency) => (
                <div key={currency.value}>
                    <p>{currency.displayName}</p>
                    <p>{currenciesRates[currency.value]}</p>
                </div>
            ))}
        </React.Suspense>
    );
};

export { Home };