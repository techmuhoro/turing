import { useState } from 'react'
import { Header, MenuOverlay, Hero, Offers, Skills, Talent, Boundary, Testimonial,Hire, Footer } from '../';
import './Home.css'

export function Home() {
    const [menuHidden, setMenuHidden] = useState(true)

    const menuSettings = {
        menuHidden,
        setMenuHidden
    }

    return (
        <div className="container">
            <Header menu={menuSettings}/>
            <MenuOverlay menu={menuSettings} />
            <Hero />
            <Offers />
            <Skills />
            <Talent />
            <Boundary />
            <Testimonial />
            <Hire />
            <Footer />
        </div>
    );
}