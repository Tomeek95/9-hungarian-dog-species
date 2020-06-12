import * as React from "react";
import { NavLink } from "react-router-dom";
import "./Less/Footer.css";

import dogLogo from "../../../assets/logo.png";

interface IProps {}

const footer: React.FC<IProps> = (props) => {
    return (
        <section className="footer">
            <NavLink className="brand-section-f" to="/9-hungarian-dog-species">
                <img src={dogLogo} alt="dog" className="brand-section-f__logo-f" />
                <h3 className="brand-section-f__title-f">A kilenc magyar kutya</h3>
            </NavLink>
            <ul className="footer-nav">
                <li className="footer-nav__list-item footer-nav__list-item--1">
                    <NavLink className="no-textdecor" to="/9-hungarian-dog-species/spec-dog">
                        Rövid szőrű magyar vizsla
                    </NavLink>
                </li>
                <li className="footer-nav__list-item footer-nav__list-item--2">
                    <NavLink className="no-textdecor" to="/9-hungarian-dog-species/spec-dog">
                        Magyar agár
                    </NavLink>
                </li>
                <li className="footer-nav__list-item footer-nav__list-item--3">
                    <NavLink className="no-textdecor" to="/9-hungarian-dog-species/spec-dog">
                        Drótszőrű magyar vizsla
                    </NavLink>
                </li>
                <li className="footer-nav__list-item footer-nav__list-item--4">
                    <NavLink className="no-textdecor" to="/9-hungarian-dog-species/spec-dog">
                        Erdélyi kopó
                    </NavLink>
                </li>
                <li className="footer-nav__list-item footer-nav__list-item--5">
                    <NavLink className="no-textdecor" to="/9-hungarian-dog-species/spec-dog">
                        Kuvasz
                    </NavLink>
                </li>
                <li className="footer-nav__list-item footer-nav__list-item--6">
                    <NavLink className="no-textdecor" to="/9-hungarian-dog-species/spec-dog">
                        Komondor
                    </NavLink>
                </li>
                <li className="footer-nav__list-item footer-nav__list-item--7">
                    <NavLink className="no-textdecor" to="/9-hungarian-dog-species/spec-dog">
                        Pumi
                    </NavLink>
                </li>
                <li className="footer-nav__list-item footer-nav__list-item--8">
                    <NavLink className="no-textdecor" to="/9-hungarian-dog-species/spec-dog">
                        Puli
                    </NavLink>
                </li>
                <li className="footer-nav__list-item footer-nav__list-item--9">
                    <NavLink className="no-textdecor" to="/9-hungarian-dog-species/spec-dog">
                        Mudi
                    </NavLink>
                </li>
            </ul>
            <p className="footer-date">2020</p>
        </section>
    );
};

export default footer;
