import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { PublicLayout } from './layouts/public-layout';
import { Currency, Home, Settings, Statistics } from './pages';
import { pages } from './utils/routes';

function App() {
    return (
        <div className="App">
            <RecoilRoot>
                <PublicLayout>
                    <Routes>
                        <Route path={pages.home.value} element={<Home />} />
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
                            element={
                                <Suspense fallback={<div>Loading</div>}>
                                    <Settings />
                                </Suspense>
                            }
                        />
                    </Routes>
                </PublicLayout>
            </RecoilRoot>
        </div>
    );
}

export default App;
