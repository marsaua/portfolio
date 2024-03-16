import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavMenu.scss"

const NavMenu = () => {
    const location = useLocation()

    return (
        <>
        <nav className="nav__menu">
            <div className={`nav__item ${location.pathname === '/portfolio' ? 'active' : ''}`}>
                <Link className="nav__item__link" to="/portfolio">Home</Link>
            </div>
            <div className={`nav__item nav__protect ${location.pathname === '/portfolio/protect' ? 'active' : ''}`}>
                <Link className="nav__item__link"  to="/portfolio/protect">Protect</Link>
            </div>
            <div className={`nav__item ${location.pathname === '/portfolio/appointment' ? 'active' : ''}`}>
                <Link className="nav__item__link" to="/portfolio/appointment">Appointment</Link>
            </div>
            <div className={`nav__item ${location.pathname === '/portfolio/fork' ? 'active' : ''}`}>
                <Link className="nav__item__link"  to="/portfolio/fork">Fork app</Link>
            </div>
            <div className={`nav__item ${location.pathname === '/portfolio/ham' ? 'active' : ''}`}>
                <Link className="nav__item__link"  to="/portfolio/ham">The Ham</Link>
            </div>
            <div className={`nav__item ${location.pathname === '/portfolio/contacts' ? 'active' : ''}`}>
                <Link className="nav__item__link"  to="/portfolio/contacts">Contacts</Link>
            </div>
            </nav>
        </>
    )
}
export default NavMenu