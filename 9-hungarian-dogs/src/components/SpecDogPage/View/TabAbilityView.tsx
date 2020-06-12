import * as React from "react";
import { IAbilities } from "../Model/SpecDogPageModel";
import "./Less/Tabs.css";

import mindLogo from "../../../assets/elme.png";
import relationLogo from "../../../assets/kapcsolat.png";
import dogImg from "../../../assets/vizsla-jellemzo3.png";

interface IProps {
    abilitiesData: IAbilities;
}

const tabPhysiqueView: React.FC<IProps> = (props) => {
    return (
        <div className="tabs-container">
            <ul className="property-section property-section--ab">
                <li className="list-item list-item--1-ab">
                    <div className="logo-and-title logo-and-title--ab">
                        <img className="tabs-logo" src={mindLogo} alt="mindLogo" />
                        <h3 className="tabs-title tabs-title--ab">Elme</h3>
                    </div>
                    <p className="property property--1-ab">Taníthatóság</p>
                    <p className="property property--2-ab">Ugatósság</p>
                    <p className="property property--3-ab">Mozgás igény</p>

                    <p className="value value--1-ab">{props.abilitiesData.teachability}</p>
                    <p className="value value--2-ab">{props.abilitiesData.barking}</p>
                    <p className="value value--3-ab">{props.abilitiesData.movementNeed}</p>
                </li>
                <li className="list-item list-item--2-ab">
                    <div className="logo-and-title logo-and-title--ab">
                        <img className="tabs-logo" src={relationLogo} alt="relationLogo" />
                        <h3 className="tabs-title tabs-title--ab">Kapcsolat</h3>
                    </div>
                    <p className="property property--1-ab">Állatokkal</p>
                    <p className="property property--2-ab-wider">Gyerekekkel</p>
                    <p className="property property--3-ab-smaller">Lakásban tartható</p>
                    <p className="value value--1-ab">{props.abilitiesData.wAnimals}</p>
                    <p className="value value--2-ab-wider">{props.abilitiesData.wChildren}</p>
                    <p className="value value--3-ab-smaller">{props.abilitiesData.roomie}</p>
                </li>
            </ul>
            <div className="image-section">
                <img className="property-image" src={dogImg} alt="dog-abi" />
            </div>
        </div>
    );
};

export default tabPhysiqueView;
