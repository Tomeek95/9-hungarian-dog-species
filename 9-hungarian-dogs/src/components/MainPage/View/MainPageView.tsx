import * as React from "react";
import DogBreedMontage from "../../DogBreeds/DogBreedsView";
import Footer from "../../Layout/Footer/FooterView";
import Navbar from "../../Layout/Navbar/Controller/NavbarController";

import "./Less/MainPage.css";

interface IProps {
    dummyDogBreedsClicked: () => void;
}

const mainPageView: React.FC<IProps> = (props) => {
    return (
        <div>
            <div className="dummy-div-to-the-top" />
            <Navbar navbarComplexity="main-page" dogBreedsClicked={props.dummyDogBreedsClicked} />
            <DogBreedMontage sliding={false} />

            <div id="about" className="about-container">
                <h3 className="title-of-content">Rólunk</h3>
                <p className="text-of-content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum
                    laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.
                    Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis
                    parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra
                    vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.
                </p>
            </div>

            <Footer />
        </div>
    );
};

export default mainPageView;
