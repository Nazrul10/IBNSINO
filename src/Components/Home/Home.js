import React from 'react';
import HeroSection from '../../screens/HeroSection';
import Services from '../Services/Services';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <HeroSection></HeroSection>
            <Services></Services>
            <Footer></Footer>
        </div>
    );
};

export default Home;