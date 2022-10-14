import { Option } from '../types/option.type';
import { RATE_PRECISION } from '../utils/constants';

const CURRENCY_URL = 'https://api.exchangerate.host';

export class CurrencyDataService {
    public static async getLatestRates(curruncies: Array<Option<string>>) {
        const currencyUrlParams = curruncies.map((c) => c.value).join(',');

        const response = await fetch(
            `${CURRENCY_URL}/latest?places=${RATE_PRECISION}&symbols=${currencyUrlParams}`,
        );

        if (!response.ok) {
            throw new Error('Network response was not OK');
        }

        return response.json();
    }

    public static async getCurrencies(): Promise<unknown> {
        const response = await fetch(`${CURRENCY_URL}/symbols`);

        if (!response.ok) {
            throw new Error('Network response was not OK');
        }

        return response.json();
    }
}
