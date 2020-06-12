import * as React from "react";
import Footer from "../../Layout/Footer/FooterView";
import Navbar from "../../Layout/Navbar/Controller/NavbarController";
import DogBreeds from "../../DogBreeds/DogBreedsView";
import EventsPageModel from "../Model/EventsPageModel";

import "./Less/Events.css";
import { NavLink } from "react-router-dom";

interface IProps {
    data: EventsPageModel;
    showMontage: boolean;
    dogBreedsClicked: () => void;
    closeMontage: () => void;
}

const eventsView: React.FC<IProps> = (props) => {
    return (
        <div>
            <Navbar navbarComplexity="simple" dogBreedsClicked={props.dogBreedsClicked} />
            <DogBreeds
                sliding={true}
                showDogBreeds={props.showMontage}
                closeDogBreeds={props.closeMontage}
            />

            <div className="events-page">
                <header className="top-section">
                    <h1 className="top-section__title">Események</h1>
                </header>
                <section className="events-container">
                    {props.data.events.map((event) => (
                        <div className="event-card" key={event.id}>
                            <img className="event-card__event-image" src={event.src} alt="event" />
                            <h2 className="event-card__event-title">{event.title}</h2>
                            <p className="event-card__event-short-text">{event.text}</p>
                            <p className="event-card__event-date">{event.date}</p>
                            <NavLink className="event-card__detailes-button" to="event">
                                RÉSZLETEK
                            </NavLink>
                        </div>
                    ))}
                </section>
            </div>
            <Footer />
        </div>
    );
};

export default eventsView;
