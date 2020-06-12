import * as React from "react";
import SpecDogPageModel from "../Model/OriginModel";
import "./Less/Origin.css";

interface IProps {
    isOpen: boolean;
    data: SpecDogPageModel;
    moreInfo: string;
    closingMoreOriginInfo: () => void;
}

const originView: React.FC<IProps> = (props) => {
    let containerClassName: string[] = [ "more-origin-info-container", "hiding-container" ];
    if (props.isOpen) {
        containerClassName = [ "more-origin-info-container", "show-container" ];
    }
    return (
        <div className={containerClassName.join(" ")}>
            <div className={props.isOpen ? "full-width-line" : "do-not-show"}>
                <button
                    className="full-width-line__back-button"
                    onClick={props.closingMoreOriginInfo}
                >
                    VISSZA
                </button>
            </div>
            <div className="controlled-width">
                <h1 className="controlled-width__origin-info-title">
                    {props.moreInfo === "origin" ? "Eredete" : "Fajta leírás"}
                </h1>

                {props.data.originData.bgroundImage1 && (
                    <img
                        className="more-info-image"
                        src={props.data.originData.bgroundImage1}
                        alt="originpic"
                    />
                )}
                <p className="controlled-width__text-orig">{props.data.originData.text1}</p>
            </div>
            <div className={props.moreInfo === "origin" ? "wider-image" : "narrower-image"}>
                <img
                    className="more-info-image more-info-image--wider"
                    src={props.data.originData.bgroundImage2}
                    alt="originpic"
                />
            </div>
            <div className="controlled-width">
                <h3 className="controlled-width__subheading">{props.data.originData.title1}</h3>
                <p className="controlled-width__text-orig">{props.data.originData.text2}</p>
                <h3 className="controlled-width__subheading">{props.data.originData.title2}</h3>
                <p className="controlled-width__text-orig">{props.data.originData.text3}</p>
            </div>
        </div>
    );
};

export default originView;
