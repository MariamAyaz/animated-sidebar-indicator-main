import './App.scss';
import 'boxicons/css/boxicons.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';

import Blank from './pages/Blank';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import TeamMembers from './pages/TeamMembers';


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<AppLayout />}>
                    <Route index element={<TeamMembers />} />
                    <Route path='/Admin/started' element={<Blank />} />
                    <Route path='/Admin/AboutUs/edit' element={<AboutUs />} />
                    <Route path='/Admin/TeamMembers' element={<TeamMembers />} />
                    <Route path='/Admin/ContactUs/edit' element={<ContactUs />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
