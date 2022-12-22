import React from 'react';
import { useRecoilValue } from 'recoil';
import { homeStrings } from '../../utils/strings';
import {
    currentCurrency,
    currunciesToCompare,
} from '../settings/settings.store';
import { rates } from './home.store';
import { SourceList } from './source-list/source-list';
import { SpendingList } from './spending-list/spending-list';
import './home.scss';

const Home: React.FC = (): JSX.Element => {
    const compareCurrencies = useRecoilValue(currunciesToCompare);
    const currency = useRecoilValue(currentCurrency);
    const currenciesRates = useRecoilValue(rates);

    return (
        <div className="home">
            <div className='home__info'>
                <h3>{homeStrings.currency}</h3>
                <p>{currency.displayName}</p>
                <h3>{homeStrings.currenciesToCompare}</h3>
                {compareCurrencies.map((currency) => (
                    <div key={currency.value}>
                        <p>{currency.displayName}</p>
                        <p>{currenciesRates[currency.value]}</p>
                    </div>
                ))}
            </div>
            <div className="home__source">
                <SourceList />
            </div>
            <div className="home__spending">
                <SpendingList />
            </div>
        </div>
    );
};

export { Home };
