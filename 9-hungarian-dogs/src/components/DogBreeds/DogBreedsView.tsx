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
                    <NavLink className="image-card" key={img.imgpath} to="spec-dog">
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

/*
<NavLink className="image-card" to="spec-dog">
                    <figure className="image-card__item image-card__item--1">
                        <img
                            src={rovidvizsla}
                            alt="Dog Photo 1"
                            className="image-card__dog-image"
                        />
                    </figure>
                    <div className="image-card__darker-bg" />
                    <span className="image-card__image-title">Magyar vizsla</span>
                </NavLink>
                <NavLink className="image-card" to="spec-dog">
                    <figure className="image-card__item image-card__item--2">
                        <img src={puli} alt="Dog Photo 2" className="image-card__dog-image" />
                    </figure>
                    <div className="image-card__darker-bg" />
                    <span className="image-card__image-title">Puli</span>
                </NavLink>
                <NavLink className="image-card" to="spec-dog">
                    <figure className="image-card__item image-card__item--3">
                        <img src={pumi} alt="Dog Photo 3" className="image-card__dog-image" />
                    </figure>
                    <div className="image-card__darker-bg" />
                    <span className="image-card__image-title">Pumi</span>
                </NavLink>
                <NavLink className="image-card" to="spec-dog">
                    <figure className="image-card__item image-card__item--4">
                        <img src={mudi} alt="Dog Photo 4" className="image-card__dog-image" />
                    </figure>
                    <div className="image-card__darker-bg" />
                    <span className="image-card__image-title">Mudi</span>
                </NavLink>
                <NavLink className="image-card" to="spec-dog">
                    <figure className="image-card__item image-card__item--5">
                        <img src={kuvasz} alt="Dog Photo 5" className="image-card__dog-image" />
                    </figure>
                    <div className="image-card__darker-bg" />
                    <span className="image-card__image-title">Kuvasz</span>
                </NavLink>
                <NavLink className="image-card" to="spec-dog">
                    <figure className="image-card__item image-card__item--6">
                        <img src={komondor} alt="Dog Photo 6" className="image-card__dog-image" />
                    </figure>
                    <div className="image-card__darker-bg" />
                    <span className="image-card__image-title">Komondor</span>
                </NavLink>
                <NavLink className="image-card" to="spec-dog">
                    <figure className="image-card__item image-card__item--7">
                        <img src={drotvizsla} alt="Dog Photo 7" className="image-card__dog-image" />
                    </figure>
                    <div className="image-card__darker-bg" />
                    <span className="image-card__image-title">Drót szőrű magyar vizsla</span>
                </NavLink>
                <NavLink className="image-card" to="spec-dog">
                    <figure className="image-card__item image-card__item--8">
                        <img src={agar} alt="Dog Photo 8" className="image-card__dog-image" />
                    </figure>
                    <div className="image-card__darker-bg" />
                    <span className="image-card__image-title">Magyar agár</span>
                </NavLink>
                <NavLink className="image-card" to="spec-dog">
                    <figure className="image-card__item image-card__item--9">
                        <img
                            src={erdelyikopo}
                            alt="Dog Photo 9"
                            className="image-card__dog-image"
                        />
                    </figure>
                    <div className="image-card__darker-bg" />
                    <span className="image-card__image-title">Erdélyi kopó</span>
                </NavLink>
                 */
