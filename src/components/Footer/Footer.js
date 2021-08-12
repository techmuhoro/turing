import "./Footer.css"

export function Footer() {
    return (
        <div className="footer">
            <div className="footer-top fluid-width">
                <div className="logo">
                    <p>Turing</p>
                </div>
                <div className="links">
                    <ul className="about">
                        <p>About</p>
                        <li>
                            <a href="##">For Companies</a>
                        </li>
                        <li>
                            <a href="##">For Developers</a>
                        </li>
                        <li>
                            <a href="##">Turing Reviews</a>
                        </li>
                    </ul>
                    <ul className="company">
                        <p>Company</p>
                        <li>
                            <a href="##">Blog</a>
                        </li>
                        <li>
                            <a href="##">Press</a>
                        </li>
                        <li>
                            <a href="##">Careers</a>
                        </li>
                    </ul>
                    <ul className="support">
                        <p>Support</p>
                        <li>
                            <a href="##">Help</a>
                        </li>
                        <li>
                            <a href="##">FAQ'S</a>
                        </li>
                        <li>
                            <a href="##">Contact Us</a>
                        </li>
                    </ul>
                    <ul className="social">
                        <p>Social</p>
                        <li>
                            <a href="##">Twitter</a>
                        </li>
                        <li>
                            <a href="##">Linkdeln</a>
                        </li>
                        <li>
                            <a href="##">Facebook</a>
                        </li>
                        <li>
                            <a href="##">Instagram</a>
                        </li>
                        <li>
                            <a href="##">YouTube</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom fluid-width">
                <div className="left">
                    <p>&copy;2021 Turing</p>
                    <p>1900 Embarcadero Road Palo Alto, CA, 94303</p>
                </div>
                <div className="right">
                    <p>Terms of service</p>
                    <p>Privacy Policy</p>
                </div>
            </div>
        </div>
    )
}