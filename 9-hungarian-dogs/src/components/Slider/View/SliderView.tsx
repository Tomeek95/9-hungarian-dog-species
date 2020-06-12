import * as React from "react";
import { IDogGallery } from "../../SpecDogPage/Model/SpecDogPageModel";

import "./Less/Slider.css";

interface IProps {
    images: IDogGallery[];
    imageCounter: number;
    nextImage: () => void;
    prevImage: () => void;
    sliderHandler: (showSlider: boolean) => void;
}

const specDogView: React.FC<IProps> = (props) => {
    return (
        <div className="slide-container">
            <button className="prev-button" onClick={props.prevImage} />
            <div className="image-container">
                <img
                    className="image-container__current-image"
                    src={props.images[props.imageCounter].src}
                    alt="dog"
                />
                <div className="image-container__left-side-of-img" onClick={props.prevImage} />
                <div className="image-container__right-side-of-img" onClick={props.nextImage} />
            </div>
            <button className="next-button" onClick={props.nextImage} />
            <button className="close-slider" onClick={() => props.sliderHandler(false)}>
                X
            </button>
        </div>
    );
};

export default specDogView;
