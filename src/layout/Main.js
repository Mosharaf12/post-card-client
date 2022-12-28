import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer';
import Header from '../Shared/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
           <div className='max-w-[1240px] mx-auto pt-16'>
           <Outlet></Outlet>
           </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;