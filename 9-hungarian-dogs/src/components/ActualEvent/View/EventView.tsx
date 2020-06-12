import * as React from "react";
import Footer from "../../Layout/Footer/FooterView";
import Navbar from "../../Layout/Navbar/Controller/NavbarController";
import DogBreeds from "../../DogBreeds/DogBreedsView";
import EventsPageModel from "../Model/EventPageModel";

import "./Less/Event.css";
import "../../EventsPage/View/Less/Events.less"; // where sould u put this kind of reusable components?
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

            <div className="event-page">
                <header className="header-section">
                    <img
                        className="header-section__header-image"
                        src={props.data.imgHeader}
                        alt="eventHeader"
                    />
                    <div className="header-section__bg-cover" />
                    <NavLink className="header-section__back-to-events-button" to="events">
                        VISSZA
                    </NavLink>
                    <h1 className="header-section__event-title">{props.data.eventTitle}</h1>
                </header>
                <section className="event-container">
                    <div className="checked-width">
                        <h1 className="checked-width__event-title-2">{props.data.eventTitle}</h1>
                        <p className="checked-width__event-text">{props.data.text2}</p>
                        <img
                            className="checked-width__event-image"
                            src={props.data.imgNormal}
                            alt="originpic"
                        />
                        <h3 className="checked-width__event-subtitle">{props.data.title1}</h3>
                        <p className="checked-width__event-text">{props.data.text2}</p>
                        <h3 className="checked-width__event-subtitle">{props.data.title2}</h3>
                        <p className="checked-width__event-text">{props.data.text3}</p>
                    </div>
                </section>
                <section className="more-events-section">
                    <h3 className="title-of-more-events">További események</h3>
                    <div className="events-container">
                        {props.data.events.map((event) => (
                            <div className="event-card" key={event.id}>
                                <img
                                    className="event-card__event-image"
                                    src={event.src}
                                    alt="event"
                                />
                                <h2 className="event-card__event-title">{event.title}</h2>
                                <p className="event-card__event-short-text">{event.text}</p>
                                <p className="event-card__event-date">{event.date}</p>
                                <NavLink className="event-card__detailes-button" to="event">
                                    RÉSZLETEK
                                </NavLink>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
};

export default eventsView;
