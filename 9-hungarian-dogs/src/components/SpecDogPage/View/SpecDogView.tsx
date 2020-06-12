import * as React from "react";
import Navbar from "../../Layout/Navbar/Controller/NavbarController";
import Footer from "../../Layout/Footer/FooterView";
import DogDescView from "./DogDescView";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import PhysiqueTab from "./TabPhysiqueView";
import FurTab from "./TabFurView";
import AbilityTab from "./TabAbilityView";
import MoreDogBreeds from "./MoreDogBreedsView";
import DogGallery from '../../DogBreeds/DogBreedsView';
import SliderController from '../../Slider/Controller/SliderController';
import SpecDogPageModel from "../Model/SpecDogPageModel";
import OriginController from '../../MoreAboutOrigin/Controller/OriginController';

import "./Less/SpecDogView.css";


interface IProps {
    data: SpecDogPageModel,
    showDogBreeds: boolean,
    showSlider: boolean,
    showMoreAboutOrigin: boolean;
    showMoreBreedDesc: boolean;
    closeDogBreeds: () => void,
    dogBreedsClicked: () => void,
    sliderHandler: (showSlider: boolean) => void,
    openMoreAboutOrigin: () => void;
    openMoreBreedDesc: () => void;
    closingMoreOriginInfo: () => void;
}

const specDogView: React.FC<IProps> = (props) => {
    return (
        <div className="page-content">
            <Navbar 
                navbarComplexity="complex"
                dogBreedsClicked={props.dogBreedsClicked}
            />

            <DogGallery
                sliding={true}
                showDogBreeds={props.showDogBreeds}
                closeDogBreeds={props.closeDogBreeds}
            />            

            <OriginController 
                isOpen={props.showMoreAboutOrigin}
                moreInfo="origin"
                closingMoreOriginInfo={props.closingMoreOriginInfo}
            />

            <OriginController 
                isOpen={props.showMoreBreedDesc}
                moreInfo="breeddesc" 
                closingMoreOriginInfo={props.closingMoreOriginInfo}
            />
                <div className="top-push-down"></div>
                <header className="spec-top-section" id="intro">
                    <img className="spec-bg-image"
                        src={props.data.section1?.bgroundImage} 
                        alt="dog"/>
                    <div className="intro-text">
                        <h2 className="intro-text__title-top">{props.data.section1?.title2}</h2>
                        <h1 className="intro-text__title-bottom">{props.data.section1?.title}</h1>
                    </div>
                </header>
                <section className="original-section" id="origin">
                    <DogDescView 
                        backGroundImage={props.data.section2.bgroundImage} 
                        sectionTitle="Eredete" upperSide={true}
                        sectionDesc={props.data.section2.text}
                        openMoreAboutOrigin={props.openMoreAboutOrigin}
                        openMoreBreedDesc={props.openMoreBreedDesc}
                    />
                </section>
                <div id="props"></div>
                <section className="property-container">
                    <h1 className="property-title">Jellemzők</h1>
                    <Tabs className="custom-react-tabs">
                        <TabList>
                            <Tab>FIZIKUM</Tab>
                            <Tab>SZŐRZET</Tab>
                            <Tab>ELME, KAPCSOLAT</Tab>
                        </TabList>
                        <TabPanel>
                            <PhysiqueTab 
                                physiqueData={props.data.section3.physique}
                            />
                        </TabPanel>
                        <TabPanel>
                            <FurTab 
                                furData={props.data.section3.fur}

                            />
                        </TabPanel>
                        <TabPanel>
                            <AbilityTab 
                                abilitiesData={props.data.section3.abilities}

                            />
                        </TabPanel>
                    </Tabs>
                </section>
                <section className="original-section" id="desc">
                    <DogDescView 
                        backGroundImage={props.data.section4.bgroundImage} 
                        sectionTitle="Fajta leírás" upperSide={false}
                        sectionDesc={props.data.section4.text}
                        openMoreAboutOrigin={props.openMoreAboutOrigin}
                        openMoreBreedDesc={props.openMoreBreedDesc}
                    />
                </section>
                {props.showSlider ? 
                <SliderController
                    images={props.data.section5}
                    sliderHandler={props.sliderHandler}
                />
                
                    : <div className="gallery-section" 
                        id="gallery" 
                        onClick={() => props.sliderHandler(true)}>
                            {props.data.section5.map(img => (
                            <img key={img.src}
                             src={img.src} 
                             alt="single-dog" 
                             className="single-image">

                             </img>
                            ))}
                            <div className="button-of-gallery">Galéria megtekintése</div>
                    </div>
                }
                <div className="page-content__other-dog-breeds-section">
                    <MoreDogBreeds moreDogCard={props.data.section6} />
                </div>
            <Footer />
        </div>
    );
};

export default specDogView;
