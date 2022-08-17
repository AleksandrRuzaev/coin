import { Route, Routes } from 'react-router-dom';
import { PublicLayout } from './layouts/public-layout';

function App() {
    return (
        <div className="App">
            <PublicLayout>
                <Routes>
                    {/* <Route path="/about" element={<About />}></Route> */}
                    <Route path="/pricing/:id" element={<div>r1</div>}></Route>
                    <Route path="/" element={<div>123</div>}></Route>
                </Routes>
            </PublicLayout>
        </div>
    );
}

export default App;
