import * as React from "react";
import BackDrop from "./BackDrop";
import { NavLink } from "react-router-dom";
import "./Less/DogBreeds.css";

import agar from "../../assets/agar.jpg";
import drotvizsla from "../../assets/drot-vizsla.jpg";
import erdelyikopo from "../../assets/erdekopo.jpg";
import komondor from "../../assets/komondor.jpg";
import kuvasz from "../../assets/kuvasz.jpg";
import mudi from "../../assets/mudi.jpg";
import puli from "../../assets/puli.jpg";
import pumi from "../../assets/pumi.jpg";
import rovidvizsla from "../../assets/rovidszoru-magyar-vizsla.jpg";

interface Iimagestorage {
    imgpath: string;
    imageTitle: string;
}

interface IProps {
    sliding: boolean;
    showDogBreeds?: boolean;
    closeDogBreeds?: () => void;
}

const dogBreeds: React.FC<IProps> = (props) => {
    let visibility: string[] = [ "sliding-image-montage", "hide-dog-options" ];
    let buttonVisibility: string[] = [ "close-sliding-montage", "hide-dog-closing-btn" ];
    if (props.sliding) {
        if (props.showDogBreeds) {
            visibility = [ "sliding-image-montage", "show-dog-options" ];
            buttonVisibility = [ "close-sliding-montage", "show-dog-closing-btn" ];
        }
    }

    const imageContainer: Iimagestorage[] = [];
    imageContainer.push({ imgpath: rovidvizsla, imageTitle: "MAGYAR VIZSLA" });
    imageContainer.push({ imgpath: puli, imageTitle: "PULI" });
    imageContainer.push({ imgpath: pumi, imageTitle: "PUMI" });
    imageContainer.push({ imgpath: mudi, imageTitle: "MUDI" });
    imageContainer.push({ imgpath: kuvasz, imageTitle: "KUVASZ" });
    imageContainer.push({ imgpath: komondor, imageTitle: "KOMONDOR" });
    imageContainer.push({ imgpath: drotvizsla, imageTitle: "DRÓT SZŐRŰ MAGYAR VIZSLA" });
    imageContainer.push({ imgpath: agar, imageTitle: "MAGYAR AGÁR" });
    imageContainer.push({ imgpath: erdelyikopo, imageTitle: "ERDÉLYI KOPÓ" });

    return (
        <div>
            {props.sliding && (
                <div>
                    <BackDrop
                        showDogBreeds={props.showDogBreeds}
                        closeDogBreeds={props.closeDogBreeds}
                    />
                    <button className={buttonVisibility.join(" ")} onClick={props.closeDogBreeds}>
                        X
                    </button>
                </div>
            )}
            <div className={props.sliding ? visibility.join(" ") : "image-montage"}>
                {imageContainer.map((img) => (
                    <NavLink
                        className="image-card"
                        key={img.imgpath}
                        to="/9-hungarian-dog-species/spec-dog"
                    >
                        <img
                            src={img.imgpath}
                            alt="magyar-vizsla"
                            className="image-card__dog-image"
                        />
                        <div className="image-card__darker-bg" />
                        <span className="image-card__image-title">{img.imageTitle}</span>
                    </NavLink>
                ))}
            </div>
        </div>
    );
};

export default dogBreeds;
