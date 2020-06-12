import * as React from "react";
import { IMoreDogCard } from "../Model/SpecDogPageModel";
import "./Less/MoreDogBreeds.css";

interface IProps {
    moreDogCard: IMoreDogCard[];
}

const moreDogBreedsView: React.FC<IProps> = (props) => {
    return (
        <section className="more-dogs-section">
            <div className="title-of-more-dogs">További kutyafajták</div>
            <div className="cards-container">
                {props.moreDogCard.map((card) => (
                    <div key={card.src} className="more-dog-card">
                        <img className="more-dog-card__image" src={card.src} alt={card.name} />
                        <h3 className="more-dog-card__title">{card.name}</h3>
                        <button className="more-dog-card__button">Bővebben</button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default moreDogBreedsView;
