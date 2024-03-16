import React, { useState, useRef, useEffect  } from "react";
import { Link, useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import "./NavMenu.scss"

const NavMenu = () => {
    const location = useLocation()
    const isMobile = useMediaQuery({ maxWidth: 665 });
    const [isMenuClicked, setIsMenuClicked] = useState(false)
    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const menuRef = useRef(null);

    const toggleBurgerMenu = () => {
        setIsMenuClicked(!isMenuClicked);
        setBurgerClass("burger-bar unclicked")
        setMenuClass("menu hidden")


    };
    const updateMenu = () => {
        if(!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        }
        else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuClicked(false);
                setBurgerClass("burger-bar unclicked");
                setMenuClass("menu hidden");
            }
        };

        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, []);
    return (
        <>
            <nav className='nav__menu' ref={menuRef}>
                {isMobile && (
                    <>
                        <div className="burger-menu"
                            onClick={() => {
                                updateMenu()
                                
                        }}>
                            <div className={burger_class} ></div>
                            <div className={burger_class} ></div>
                            <div className={burger_class} ></div>
                        </div>
                        <p className="portfolio">portfolio</p>
                    </>
                )}
                {isMobile ? (isMenuClicked && 
                    <div className="mobile__nav">
                        <div className={`nav__item ${location.pathname === '/portfolio' ? 'active' : ''}`}  onClick={() => toggleBurgerMenu()}>
                            <Link className="nav__item__link" to="/portfolio">Home</Link>
                        </div>
                        <div className={`nav__item nav__protect ${location.pathname === '/portfolio/protect' ? 'active' : ''}`} onClick={() => toggleBurgerMenu()}>
                            <Link className="nav__item__link"  to="/portfolio/protect">Protect</Link>
                        </div>
                        <div className={`nav__item ${location.pathname === '/portfolio/appointment' ? 'active' : ''}`}  onClick={() => toggleBurgerMenu()}>
                            <Link className="nav__item__link" to="/portfolio/appointment">Appointment</Link>
                        </div>
                        <div className={`nav__item ${location.pathname === '/portfolio/fork' ? 'active' : ''}`}  onClick={() => toggleBurgerMenu()}>
                            <Link className="nav__item__link"  to="/portfolio/fork">Fork app</Link>
                        </div>
                        <div className={`nav__item ${location.pathname === '/portfolio/ham' ? 'active' : ''}`}  onClick={() => toggleBurgerMenu()}>
                            <Link className="nav__item__link"  to="/portfolio/ham">The Ham</Link>
                        </div>
                        <div className={`nav__item ${location.pathname === '/portfolio/contacts' ? 'active' : ''}`}  onClick={() => toggleBurgerMenu()}>
                            <Link className="nav__item__link"  to="/portfolio/contacts">Contacts</Link>
                        </div>
                    </div>

                ) :
                     <>
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
                    </>
                }
            </nav>
           
            
        </>
    )
}
export default NavMenu