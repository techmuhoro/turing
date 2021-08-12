import { useEffect, useState } from "react"
import './Header.css'

export function Header({ menu: { menuHidden, setMenuHidden } }) {
    const [isBoxShadow, setIsBoxShadow] = useState(determineShadow())
    const headerIcon = menuHidden ? 'fas fa-bars' : 'fas fa-times'
    function determineShadow() {
        return window.pageYOffset > 10 ? true : false
    }

    useEffect(()=> {
        //Component did mount
        window.addEventListener('scroll', function scrollListener() {
            // console.log(window.pageYOffset)
            if (window.pageYOffset > 20) {
                !isBoxShadow && setIsBoxShadow(true)
            }
            else {
                isBoxShadow && setIsBoxShadow(false)
            } 
        })
    }, [isBoxShadow])
    return (
        <div className="header" style={{ boxShadow: isBoxShadow ? '0 1px 5px rgba(0, 0, 0, 0.2)' : '' }}>
            <div className="header-wrapper fluid-width">
                <div className="logo">
                    <p>Turing</p>
                </div>
                <div className="header-actions">
                    <p className="apply">
                        <a href="##">Apply for jobs</a>
                    </p>
                    <p className="hire">
                        <a href="##">Hire developers</a>
                    </p>
                </div>
                <div 
                    className="menu"
                    onClick={() => setMenuHidden(!menuHidden)}    
                >
                    <p>
                        <i className={headerIcon}></i>
                    </p>    
                </div>
            </div>
        </div>
    );
}