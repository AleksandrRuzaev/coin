import { Route, Routes } from 'react-router-dom';
import { withSuspence } from '../../../hocs';
import { Statistics, Currency, Home, Settings } from '../../../pages';
import { pages } from '../../../utils/routes';

const HomePage = withSuspence(Home);
const SettingsPage = withSuspence(Settings);

const Routing: React.FC = (): JSX.Element => {
    return (
        <Routes>
            <Route path={pages.home.value} element={<HomePage />} />
            <Route path={pages.statistics.value} element={<Statistics />} />
            <Route path={pages.currency.value} element={<Currency />} />
            <Route path={pages.settings.value} element={<SettingsPage />} />
        </Routes>
    );
};

export { Routing };
