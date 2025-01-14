import React, { useEffect, useState } from "react";
import './Navbar.css';

const Navbar = () => {
    const [scrollY, setScrollY] = useState(0);

    const handleScroll = () => {
        setScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const isScrolled = scrollY > 50;
    const navbarClass = isScrolled ? "navbar navbar-scrolled" : "navbar";

    return (
        <div className={navbarClass}>
            <img className="logo" src="./logo.png" alt="logo" />
            <p className="company">Random Company</p>
        </div>
    );
};

export default Navbar;
