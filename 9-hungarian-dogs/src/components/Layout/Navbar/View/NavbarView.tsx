import * as React from "react";
import "./Less/Navbar.css";

import logo from "../../../../assets/logo.png";
import { NavLink } from "react-router-dom";

interface IProps {
    mobileNavbarButton: boolean;
    navbarComplexity: string;
    navbarState: boolean;
    clickedNavbarButton: boolean;
    functionWrapper: () => void;
    switchingBackNavbar: () => void;
    dogBreedsClicked: () => void;
    closingOrOpeningDroppdown: (closing: boolean, buttonIsClicked: boolean) => void;
}

const navbar: React.FC<IProps> = (props) => {
    //normal navbar classNames
    let navbarClassName: string[] = [ "spec-dog", "show" ];
    let specdogSecClassName: string[] = [ "spec-dog-2", "hide" ];
    let brandSectionClassName: string[] = [ "brand-section", "brand-section--sp" ];
    let brandLogoClassName: string[] = [ "brand-section__dog-logo", "brand-section__dog-logo--sp" ];
    let brandTitleClassName: string[] = [
        "brand-section__page-title",
        "brand-section__page-title--sp"
    ];
    //mobile-navbar classNames
    let mobileNavClassName: string[] = [ "mobile-navbar" ];
    let mobileNavButtonClassName: string[] = [ "btn-container__nav-btn" ];
    let mobileNavLinks: string[] = [ "mobile-links", "hide-mobile-links" ];
    let mobileNavBackdropClassName: string[] = [ "backdrop-navbar" ];

    //this is responsible for changing the 2 navbars
    if (!props.clickedNavbarButton && !props.navbarState) {
        navbarClassName = [ "spec-dog", "hide" ];
        specdogSecClassName = [ "spec-dog-2", "show" ];
    }
    //main-page
    if (props.navbarComplexity === "main-page") {
        navbarClassName = [ "main-page" ];
        brandSectionClassName = [ "brand-section", "brand-section--mp" ];
        brandLogoClassName = [ "brand-section__dog-logo" ];
        brandTitleClassName = [ "brand-section__page-title" ];
        mobileNavClassName = [ "mobile-navbar", "mobile-navbar--main" ];
        mobileNavButtonClassName = [ "btn-container__nav-btn", "btn-container__nav-btn--black" ];
        mobileNavBackdropClassName = [ "backdrop-navbar", "backdrop-navbar--main" ];
    }
    //events/event-page
    if (props.navbarComplexity === "simple") {
        navbarClassName = [ "spec-dog" ];
        mobileNavBackdropClassName = [ "backdrop-navbar", "backdrop-navbar--event" ];
    }
    //show-close dropdown menu
    if (props.mobileNavbarButton) {
        mobileNavLinks = [ "mobile-links", "show-mobile-links" ];
    }

    return (
        <div className="navbar-container">
            <nav className={navbarClassName.join(" ")}>
                <NavLink className={brandSectionClassName.join(" ")} to="/9-hungarian-dog-species">
                    <img src={logo} alt="dog-logo" className={brandLogoClassName.join(" ")} />
                    <h3 className={brandTitleClassName.join(" ")}>A kilenc magyar kutya</h3>
                </NavLink>

                {props.navbarComplexity !== "main-page" && (
                    <div className="links" onClick={props.dogBreedsClicked}>
                        Kutya Fajták
                    </div>
                )}

                <NavLink className="links" to="events">
                    Események
                </NavLink>

                <NavLink className="links" to="/9-hungarian-dog-species">
                    Rólunk
                </NavLink>
            </nav>

            {props.navbarComplexity === "complex" && (
                <nav className={specdogSecClassName.join(" ")}>
                    <NavLink
                        className="brand-section brand-section--sp-2"
                        to="/9-hungarian-dog-species"
                    >
                        <h3 className="brand-section__page-title brand-section__page-title--sp-2">
                            Magyar vizsla
                        </h3>
                    </NavLink>{" "}
                    <ul className="link-container">
                        <li className="link-item">
                            <a className="links links--white" href="#intro">
                                Bemutatkozás
                            </a>
                        </li>
                        <li className="link-item">
                            <a className="links links--white" href="#origin">
                                Eredete
                            </a>
                        </li>
                        <li className="link-item">
                            <a className="links links--white" href="#props">
                                Jellemzők
                            </a>
                        </li>
                        <li className="link-item">
                            <a className="links links--white" href="#desc">
                                Fajta leírás
                            </a>
                        </li>
                        <li className="link-item">
                            <a className="links links--white" href="gallery">
                                Galéria
                            </a>
                        </li>
                    </ul>
                    <div className="btn-container" onClick={props.switchingBackNavbar}>
                        <button className="btn-container__nav-btn" />
                    </div>
                </nav>
            )}
            <div>
                <nav className={mobileNavClassName.join(" ")}>
                    <NavLink
                        className="brand-section brand-section--sp-2"
                        to="/9-hungarian-dog-species"
                    >
                        <h3 className="brand-section__page-title brand-section__page-title--sp-2">
                            9 Magyar kutya
                        </h3>
                    </NavLink>{" "}
                    <div
                        className="btn-container"
                        onClick={() => props.closingOrOpeningDroppdown(true, true)}
                    >
                        <button className={mobileNavButtonClassName.join(" ")} />
                    </div>
                </nav>
                <nav className={mobileNavLinks.join(" ")}>
                    <ul className="mobile-links-container">
                        <li className="link-item">
                            {props.navbarComplexity !== "main-page" && (
                                <div className="links links--white" onClick={props.functionWrapper}>
                                    Kutya Fajták
                                </div>
                            )}
                        </li>
                        <li className="link-item">
                            <NavLink className="links links--white" to="events">
                                Események
                            </NavLink>
                        </li>
                        <li className="link-item">
                            <NavLink className="links links--white" to="/9-hungarian-dog-species">
                                Rólunk
                            </NavLink>
                        </li>
                        {props.navbarComplexity === "complex" && (
                            <div>
                                <li className="underline" />
                                <li className="link-item">
                                    <a
                                        className="links links--white"
                                        href="#intro"
                                        onClick={() =>
                                            props.closingOrOpeningDroppdown(false, false)}
                                    >
                                        Bemutatkozás
                                    </a>
                                </li>
                                <li className="link-item">
                                    <a
                                        className="links links--white"
                                        href="#origin"
                                        onClick={() =>
                                            props.closingOrOpeningDroppdown(false, false)}
                                    >
                                        Eredete
                                    </a>
                                </li>
                                <li className="link-item">
                                    <a
                                        className="links links--white"
                                        href="#props"
                                        onClick={() =>
                                            props.closingOrOpeningDroppdown(false, false)}
                                    >
                                        Jellemzők
                                    </a>
                                </li>
                                <li className="link-item">
                                    <a
                                        className="links links--white"
                                        href="#desc"
                                        onClick={() =>
                                            props.closingOrOpeningDroppdown(false, false)}
                                    >
                                        Fajta leírás
                                    </a>
                                </li>
                                <li className="link-item">
                                    <a
                                        className="links links--white"
                                        href="#gallery"
                                        onClick={() =>
                                            props.closingOrOpeningDroppdown(false, false)}
                                    >
                                        Galéria
                                    </a>
                                </li>
                            </div>
                        )}
                    </ul>
                </nav>
                {props.mobileNavbarButton && (
                    <div
                        className={mobileNavBackdropClassName.join(" ")}
                        onClick={() => props.closingOrOpeningDroppdown(false, false)}
                    />
                )}
            </div>
        </div>
    );
};

export default navbar;
