import { Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { withSuspence } from './hocs';
import { PublicLayout } from './layouts/public-layout';
import { Currency, Home, Settings, Statistics } from './pages';
import { pages } from './utils/routes';

const HomePage = withSuspence(Home);
const SettingsPage = withSuspence(Settings);

function App() {
    return (
        <div className="App">
            <RecoilRoot>
                <PublicLayout>
                    <Routes>
                        <Route path={pages.home.value} element={<HomePage />} />
                        <Route
                            path={pages.statistics.value}
                            element={<Statistics />}
                        />
                        <Route
                            path={pages.currency.value}
                            element={<Currency />}
                        />
                        <Route
                            path={pages.settings.value}
                            element={<SettingsPage />}
                        />
                    </Routes>
                </PublicLayout>
            </RecoilRoot>
        </div>
    );
}

export default App;
