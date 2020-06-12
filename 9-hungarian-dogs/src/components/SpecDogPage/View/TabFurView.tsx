import * as React from "react";
import { IFur } from "../Model/SpecDogPageModel";
import "./Less/Tabs.css";

import colourLogo from "../../../assets/szin.png";
import typeLogo from "../../../assets/tipus.png";
import careNeedLogo from "../../../assets/szigeny.png";
import descLogo from "../../../assets/leiras.png";
import dogImg from "../../../assets/vizsla-jellemzo2.png";

interface IProps {
    furData: IFur;
}

const tabPhysiqueView: React.FC<IProps> = (props) => {
    return (
        <div className="tabs-container">
            <ul className="property-section property-section--fur">
                <li className="list-item list-item--1-fur">
                    <div className="logo-and-title">
                        <img className="tabs-logo" src={colourLogo} alt="colourLogo" />
                        <h3 className="tabs-title">Szín</h3>
                    </div>
                    <p className="value value--wide">{props.furData.colour}</p>
                </li>
                <li className="list-item list-item--2-fur">
                    <div className="logo-and-title logo-and-title--fur-left">
                        <img className="tabs-logo" src={typeLogo} alt="typeLogo" />
                        <h3 className="tabs-title">Típus</h3>
                    </div>
                    <p className="value value--fur-left">{props.furData.furType}</p>
                </li>
                <li className="list-item list-item--3-fur">
                    <div className="logo-and-title logo-and-title--fur-right">
                        <img
                            className="tabs-logo tabs-logo--fur"
                            src={careNeedLogo}
                            alt="careNeedLogo"
                        />
                        <h3 className="tabs-title tabs-logo--fur">Szőrápolási igény</h3>
                    </div>
                    <p className="value value--fur-right">{props.furData.grooming}</p>
                </li>

                <div className="list-item list-item--4-fur">
                    <div className="logo-and-title">
                        <img className="tabs-logo" src={descLogo} alt="descLogo" />
                        <h3 className="tabs-title">Részletes leírás</h3>
                    </div>
                    <p className="value value--wide extra-length">{props.furData.desc}</p>
                </div>
            </ul>
            <div className="image-section">
                <img className="property-image" src={dogImg} alt="dog-fur" />
            </div>
        </div>
    );
};

export default tabPhysiqueView;
