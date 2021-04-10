import React from 'react';
import Appointment from '../Appointment/Appointment';
import Blogs from '../Blogs/Blogs';
import FeaturedService from '../FeaturedService/FeaturedService';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => (
    <div>
        <Header />
        <Services />
        <FeaturedService />
        <Appointment />
        <Testimonials />
        <Blogs />
    </div>
);

export default Home;
