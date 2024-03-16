import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavMenu.scss"

const NavMenu = () => {
    const location = useLocation()

    return (
        <>
        <nav className="nav__menu">
            <div className={`nav__item ${location.pathname === '/' ? 'active' : ''}`}>
                <Link className="nav__item__link" to="/">Home</Link>
            </div>
            <div className={`nav__item nav__protect ${location.pathname === '/protect' ? 'active' : ''}`}>
                <Link className="nav__item__link"  to="/protect">Protect</Link>
            </div>
            <div className={`nav__item ${location.pathname === '/appointment' ? 'active' : ''}`}>
                <Link className="nav__item__link" to="/appointment">Appointment</Link>
            </div>
            <div className={`nav__item ${location.pathname === '/fork' ? 'active' : ''}`}>
                <Link className="nav__item__link"  to="/fork">Fork app</Link>
            </div>
            <div className={`nav__item ${location.pathname === '/ham' ? 'active' : ''}`}>
                <Link className="nav__item__link"  to="/ham">The Ham</Link>
            </div>
            <div className={`nav__item ${location.pathname === '/contacts' ? 'active' : ''}`}>
                <Link className="nav__item__link"  to="/contacts">Contacts</Link>
            </div>
            </nav>
        </>
    )
}
export default NavMenu