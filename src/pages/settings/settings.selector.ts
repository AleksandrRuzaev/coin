import { selector } from 'recoil';
import { CurrencyDataService } from '../../services/currency.data.service';
import { Option } from '../../types';

const currenciesOptions = selector<Array<Option<string>>>({
    key: '[Settings] Curruncies/Default',
    get: async () =>
        CurrencyDataService.mapSymbolsToOptions(
            await CurrencyDataService.getCurrencies(),
        ),
});

export { currenciesOptions };
