import React from 'react';
import Appointment from '../Appointment/Appointment';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact';
import Doctors from '../Doctors/Doctors';
import FeaturedService from '../FeaturedService/FeaturedService';
import Footer from '../Footer/Footer';
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
        <Doctors />
        <Contact />
        <Footer />
    </div>
);

export default Home;
