import "./Skills.css"
import SkillsAvatar from "./imgs/skills.png"

export function Skills() {
    return (
        <div className="skills">
            <div className="skills-wrapper fluid-width">
                <SkillsImage />
                <SkillsDesc />
            </div>
        </div>
    )
}

function SkillsImage() {
    return (
        <div className="skills-image">
            <div>
                <img src={SkillsAvatar} alt="skills list" />
            </div>
        </div>
    )
}

function SkillsDesc() {
    return (
        <div className="skills-desc">
            <p className="heading">100+ skills available</p>
            <p className="sub-heading">
                Hire developers vetted across seniority levels for 100+ skills, including React, Node, Python, Angular, Swift, React Native, Java, and many more.
            </p>
            <p className="cta">
                <a href="##">
                    <span>Find yours</span>
                    <span>
                        <i className="fas fa-arrow-right"></i>
                    </span>
                </a>
            </p>
        </div>
    )
}