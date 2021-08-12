import "./Talent.css"
import TalentAvatar from "./imgs/talent-image.webp"

export function Talent() {
    return (
        <div className="talent">
            <div className="talent-wrapper fluid-width">
                <TalentDesc />
                <TalentImage />
            </div>
        </div>
    )
}


function TalentImage() {
    return (
        <div className="talent-image">
            <img src={TalentAvatar} alt="skills list" />
            <a href="##">Get started to see more</a>
        </div>
    )
}
function TalentDesc() {
    return (
        <div className="talent-desc">
            <p className="heading">Introducing Turing’s Intelligent Talent Cloud</p>
            <p className="sub-heading">
                Hire intelligently with developers sourced by software, vetted by software, matched by software & managed by software.
            </p>
            <p className="cta">
                <a href="##">
                    <span>Hire now</span>
                    <span>
                        <i className="fas fa-arrow-right"></i>
                    </span>
                </a>
            </p>
        </div>
    )
}