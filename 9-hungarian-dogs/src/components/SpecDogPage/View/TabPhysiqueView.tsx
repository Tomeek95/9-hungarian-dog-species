import * as React from "react";
import { IPhysique } from "../Model/SpecDogPageModel";
import "./Less/Tabs.css";

import heightLogo from "../../../assets/magassag.png";
import weightLogo from "../../../assets/suly.png";
import statureLogo from "../../../assets/termet.png";
import dogImg from "../../../assets/vizsla-jellemzo.png";

interface IProps {
    physiqueData: IPhysique;
}

const tabPhysiqueView: React.FC<IProps> = (props) => {
    return (
        <section className="tabs-container">
            <ul className="property-section property-section--ph">
                <li className="list-item list-item--1-ph">
                    {" "}
                    <div className="logo-and-title logo-and-title--ph">
                        <img className="tabs-logo" src={heightLogo} alt="heightLogo" />{" "}
                        <h3 className="tabs-title">Marmagasság</h3>
                    </div>
                    <p className="property property--1-ph">Kan</p>
                    <p className="property property--2-ph">Szuka</p>
                    <p className="value value--1-ph">{props.physiqueData.heightMale}</p>
                    <p className="value value--2-ph">{props.physiqueData.heightFemale}</p>
                </li>
                <li className="list-item list-item--2-ph">
                    {" "}
                    <div className="logo-and-title logo-and-title--ph">
                        <img
                            className="tabs-logo ph-logo--weight"
                            src={weightLogo}
                            alt="weightLogo"
                        />
                        <h3 className="tabs-title">Súly</h3>
                    </div>
                    <p className="property property--1-ph">Kan</p>
                    <p className="property property--2-ph">Szuka</p>
                    <p className="value value--1-ph">{props.physiqueData.weightMale}</p>
                    <p className="value value--2-ph">{props.physiqueData.weightFemale}</p>
                </li>
                <li className="list-item list-item--3-ph">
                    {" "}
                    <div className="logo-and-title logo-and-title--ph">
                        <img className="tabs-logo" src={statureLogo} alt="statureLogo" />
                        <h3 className="tabs-title">Termet</h3>
                    </div>
                    <p className="value value--last">{props.physiqueData.stature}</p>
                </li>
            </ul>
            <div className="image-section">
                <img className="property-image" src={dogImg} alt="dog-ph" />
            </div>
        </section>
    );
};

export default tabPhysiqueView;
