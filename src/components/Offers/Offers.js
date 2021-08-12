import "./Offers.css"
import FastHiringAvatar from "./imgs/fast-hiring.svg"
import RemoteAvatar from "./imgs/remote.svg"
import IntelligentAvatar from "./imgs/intelligent.svg"

export function Offers() {
    return (
        <div className="offers">
            <div className="offers-wrapper fluid-width">
                <OffersHeader />
                <OffersCards />
            </div>
        </div>
    )
}

function OffersHeader() {
    return (
        <div className="offers-header">
            <div>
                <p className="text-main">What turing offers</p>
                <p className="link">
                    <a href="##">
                       <span>
                           <i className="fas fa-play-circle"></i>
                       </span>
                       <span>
                           Watch video
                       </span>
                    </a>
                </p>
            </div>
        </div>
    )
}

function OffersCards() {
    return (
        <div className="offers-cards">
            <div className="card">
                <div className="image">
                    <img src={IntelligentAvatar} alt="card" />
                </div>
                <div className="card-body">
                    <div className="head">
                        <p className="number">1</p>
                        <p>
                            Intelligent vetting
                        </p>
                    </div>
                    <p className="body-text">
                        Developers vetted over 5+ hours of rigorous tests and interviews.
                    </p>
                </div>
            </div>
            <div className="card">
                <div className="image">
                    <img src={FastHiringAvatar} alt="card" />
                </div>
                <div className="card-body">
                    <div className="head">
                        <p className="number">2</p>
                        <p>
                            Fast hiring
                        </p>
                    </div>
                    <p className="body-text">
                        Hire experienced developers in a matter of 3 days.
                    </p>
                </div> 
            </div>
            <div className="card">
                <div className="image">
                    <img src={RemoteAvatar} alt="card" />
                </div>
                <div className="card-body">
                    <div className="head">
                        <p className="number">3</p>
                        <p>
                            Remote work made easy
                        </p>
                    </div>
                    <p className="body-text">
                        Timezone-matched for easy communication.
                    </p>
                </div>
            </div>
        </div>
    )
}