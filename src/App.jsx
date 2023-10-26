import React from 'react';
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Service from "./components/Service.jsx";
import Project from "./components/Project.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
    let text="This is header Section."
    return (
        <div>
            <Header text={text} />
            <hr/>
            <Hero/>
            <hr/>
            <About/>
            <hr/>
            <Service/>
            <hr/>
            <Project/>
            <hr/>
            <Footer/>


        </div>
    );
};

export default App;