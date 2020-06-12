import * as React from "react";
import "./Less/DogDesc.css";

interface IProps {
    backGroundImage: string;
    sectionTitle: string;
    sectionDesc: string;
    upperSide: boolean;
    openMoreAboutOrigin: () => void;
    openMoreBreedDesc: () => void;
}

const dogDescView: React.FC<IProps> = (props) => {
    let whichClassName: string = "content-box";
    let descriptionClassName: string = "content-box__origin-description";
    let whiteLineClassName: string = "border-between-origin__white-line";
    if (!props.upperSide) {
        whichClassName = "content-box content-box--lower ";
        descriptionClassName =
            "content-box__origin-description content-box__origin-description--lower";
        whiteLineClassName =
            "border-between-origin__white-line border-between-origin__white-line--lower";
    }

    return (
        <div className="origin-section">
            <img className="dog-origin-img" src={props.backGroundImage} alt="dog" />
            <div className="darker-bg-color" />
            <div className={whichClassName}>
                <p className="content-box__origin-title">{props.sectionTitle}</p>
                <div className="border-between-origin">
                    <div className={whiteLineClassName} />
                    <div className="border-between-origin__circle-origin" />
                </div>
                <p className={descriptionClassName}>{props.sectionDesc}</p>
                <button
                    className="content-box__origin-more-button"
                    onClick={
                        props.sectionTitle === "Eredete" ? (
                            props.openMoreAboutOrigin
                        ) : (
                            props.openMoreBreedDesc
                        )
                    }
                >
                    BŐVEBBEN
                </button>
            </div>
        </div>
    );
};

export default dogDescView;
