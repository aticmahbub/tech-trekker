import React from 'react';
import NavBar from '../components/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const Main = () => {
    return (
        <div>
            <div className='h-16'>
                <NavBar />
            </div>
            <div className='min-h-screen-[calc(100vh-116px)]'>
                <Outlet/>
            </div>
            <Footer />
        </div>
    );
};

export default Main;