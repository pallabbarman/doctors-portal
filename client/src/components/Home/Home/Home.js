import React from 'react';
import Appointment from '../Appointment/Appointment';
import FeaturedService from '../FeaturedService/FeaturedService';
import Header from '../Header/Header';
import Services from '../Services/Services';

const Home = () => (
    <div>
        <Header />
        <Services />
        <FeaturedService />
        <Appointment />
    </div>
);

export default Home;
