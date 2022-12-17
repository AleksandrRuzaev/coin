import { RecoilRoot } from 'recoil';
import { Routing } from './layouts/components';
import { PublicLayout } from './layouts/public-layout';

function App() {
    return (
        <div className="App">
            <RecoilRoot>
                <PublicLayout>
                    <Routing />
                </PublicLayout>
            </RecoilRoot>
        </div>
    );
}

export default App;
