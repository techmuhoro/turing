import './Hero.css'
import HeroImage from "./imgs/hero-avatar.svg"

export function Hero() {
    return (
        <div className="hero">
            <div className="hero-wrapper fluid-width">
                <HeroMessage />
                <HeroAvatar />           
            </div>
        </div>
    );
}

function HeroMessage() {
    return (
        <div className="hero-message">
            <p className="main-text">
                Build faster than ever with vetted remote developers
            </p>
            <p className="sub-text">               
                Hire the top 1% of 600,000+ software developers using Turing’s Intelligent Talent Cloud. Get Silicon Valley-caliber engineers with a 100% risk-free two-week trial.
            </p>
            <p className="cta">
                <a href="##">Hire developers</a>
            </p>
            <p className="apply">
                <span>Looking for jobs instead?</span>
                <a href="##">Apply to jobs</a>
            </p>
        </div>
    )
}

function HeroAvatar() {
    return (
        <div className="hero-avatar">
            <div className="image">
                <img src={HeroImage} alt="hero" />
            </div>
        </div>
    )
}