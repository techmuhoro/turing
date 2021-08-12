import "./Boundary.css"
import BoundaryAvatar from './imgs/boundary.svg'

export function Boundary() {
    return (
        <div className="boundary">
            <div className="boundary-wrapper fluid-width">
                <BoundaryImage />
                <BoundaryDesc />
            </div>
        </div>
    )
}

function BoundaryImage() {
    return (
        <div className="boundary-image">
            <div>
                <img src={BoundaryAvatar} alt="boundaryless svg" />
            </div>
        </div>
    )
}

function BoundaryDesc() {
    return (
        <div className="boundary-desc">
            <p className="heading">Go #Boundaryless with Turing</p>
            <p className="sub-heading">
                Turing has you covered with daily stand-ups, productivity trackers, billing, and developers working in your timezone.
            </p>
            <p className="cta">
                <a href="##">
                    <span>Let's go</span>
                    <span>
                        <i className="fas fa-arrow-right"></i>
                    </span>
                </a>
            </p>
        </div>
    )
}