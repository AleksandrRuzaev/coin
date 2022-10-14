import { CurrencyDto, Option } from '../types';
import { RATE_PRECISION } from '../utils/constants';

const CURRENCY_URL = 'https://api.exchangerate.host';

export class CurrencyDataService {
    public static async getLatestRates(
        base: string,
        curruncies: Array<Option<string>>,
    ): Promise<Record<string, number>> {
        const currencyUrlParams = curruncies.map((c) => c.value).join(',');

        const response = await fetch(
            `${CURRENCY_URL}/latest?places=${RATE_PRECISION}&symbols=${currencyUrlParams}&base=${base}`,
        );

        if (!response.ok) {
            throw new Error('Network response was not OK');
        }

        const data = await response.json();

        return data.rates;
    }

    public static async getCurrencies(): Promise<Record<string, CurrencyDto>> {
        const response = await fetch(`${CURRENCY_URL}/symbols`);

        if (!response.ok) {
            throw new Error('Network response was not OK');
        }

        const data = await response.json();

        return data.symbols;
    }

    public static mapSymbolsToOptions(
        symbols: Record<string, CurrencyDto>,
    ): Array<Option<string>> {
        return Object.values(symbols).map((s) => ({
            value: s.code,
            displayName: s.description,
        }));
    }
}
