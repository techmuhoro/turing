import "./MenuOverlay.css"

export function MenuOverlay({ menu: { menuHidden, setMenuHidden } }) {
    const menuClassList = menuHidden ? 'menu-overlay' : 'menu-overlay show-overlay'
    return (
        <div className={ menuClassList }>
            <div className="menu">
                <p>
                    <a href="##">Hire developers</a>
                </p>
                <p>
                    <a href="##">Apply to jobs</a>
                </p>
            </div>
        </div>
    )
}