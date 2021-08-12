import { useState } from 'react'
import TeAvatar from "./imgs/Te.svg"
import FastCompanyAvatar from "./imgs/Fast-company.svg"
import EntrepreneurAvatar from "./imgs/Entrepreneur.svg"
import ForbesAvatar from "./imgs/Forbes.svg"
import "./Testimonial.css"

export function Testimonial() {
    const [activeComponent, setActiveComponent] = useState(1);
    const componentLookup = {
        1: <Te />,
        2: <FastCompany />,
        3: <Entrepreneur />,
        4: <Forbes />,
    }
    function scrollNextComponent() {
        if(activeComponent === 4) {
            setActiveComponent(1)
        } else {
            setActiveComponent(activeComponent + 1)
        }
    }
    function scrollPrevComponent() {
        if(activeComponent  === 1) {
            setActiveComponent(4)
        } else {
            setActiveComponent(activeComponent - 1)
        }
    }
    return (
        <div className="testimonial">
            <div className="testimonial-wrapper">
                <div className="testimonial-component">
                    {componentLookup[activeComponent]}
                    <p 
                        className="go-left"
                        onClick={scrollPrevComponent}
                    >
                        <i className="fas fa-chevron-left"></i>
                    </p>
                    <p 
                        className="go-right"
                        onClick={scrollNextComponent}
                    >
                        <i className="fas fa-chevron-right"></i>
                    </p>
                </div>
                <div className="testimonial-buttons">
                    <div>
                        <div 
                            className="testimonial-button"
                            onClick={() => setActiveComponent(1)}
                            style={{
                                filter: activeComponent === 1 ? "blur(0px)" : "blur(1.1px)"
                            }}
                        >
                            <img src={TeAvatar} alt="Te company" />
                        </div>
                        <div 
                            className="testimonial-button"
                            onClick={() => setActiveComponent(2)}
                            style={{
                                filter: activeComponent === 2 ? "blur(0px)" : "blur(1.1px)"
                            }}
                        >
                            <img src={FastCompanyAvatar} alt="Fast company" />
                        </div>
                    </div>
                    <div>
                        <div 
                            className="testimonial-button"
                            onClick={() => setActiveComponent(3)}
                            style={{
                                filter: activeComponent === 3 ? "blur(0px)" : "blur(1.1px)"
                            }}
                        >
                            <img src={EntrepreneurAvatar} alt="Entrepreneur" />
                        </div>
                        <div 
                            className="testimonial-button"
                            onClick={() => setActiveComponent(4)}
                            style={{
                                filter: activeComponent === 4 ? "blur(0px)" : "blur(1.1px)"
                            }}
                        >
                            <img src={ForbesAvatar} alt="Forbes blog" />
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    )
}


function Te() {
    return (
        <div 
            className="testimonial-text"
        >
            <p>
                "Turing nabs $32 more for an AI-based platform to source and manage engineers remotely"
            </p>
        </div>
    )
}
function FastCompany() {
    return (
        <div 
            className="testimonial-text"
        >
            <p>
                "Turing named to Fast Company's World's Most Innovativate Companies 2021 for placing remote devs at top firms via AI-powered vetting"
            </p>
        </div>
    )
}
function Entrepreneur() {
    return (
        <div 
        className="testimonial-text"
        >
            <p>
                "Turing helps entrepreneurs tap into the global talent pool to hire elite pre-vetted remote engineers at the push of a button"
            </p>
        </div>
    )
}
function Forbes() {
    return (
        <div 
            className="testimonial-text"
        >
            <p>
                "Fast-growing startups that employ love: Turing name one of the America's Best Startup Employers for 2021 by Forbes" 
            </p>
        </div>
    )
}
