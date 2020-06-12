import * as React from "react";
import SpecDogPageDao from "../DAO/SpecDogPageDAO";
import SpecDogPageModel from "../Model/SpecDogPageModel";
import SpecDogView from "../View/SpecDogView";

interface IProjectProps {
    history: any;
    location: any;
    match: any;
    staticContext?: any;
}

interface IProjectState {
    data: SpecDogPageModel;
    showDogBreeds: boolean;
    showSlider: boolean;
    showMoreAboutOrigin: boolean;
    showMoreBreedDesc: boolean;
}

class SpecDogPageController extends React.Component<IProjectProps, IProjectState> {
    state: IProjectState = {
        data: new SpecDogPageModel(),
        showDogBreeds: false,
        showSlider: false,
        showMoreAboutOrigin: false,
        showMoreBreedDesc: false
    };

    componentDidMount = () => {
        document.body.style.overflowY = "scroll";
        this.setState({ data: SpecDogPageDao.getSpecDogPage() });
    };

    dogBreedsClicked = () => {
        if (window.innerWidth <= 600) {
            document.body.style.overflow = "hidden";
        }
        this.setState({ showDogBreeds: true });
    };

    closeDogBreeds = () => {
        document.body.style.overflowY = "scroll";
        this.setState({ showDogBreeds: false });
    };

    sliderHandler = (value: boolean) => {
        this.setState({ showSlider: value });
    };

    openMoreAboutOrigin = () => {
        document.body.style.overflow = "hidden";
        this.setState({ showMoreAboutOrigin: true });
    };

    openMoreBreedDesc = () => {
        document.body.style.overflow = "hidden";
        this.setState({ showMoreBreedDesc: true });
    };

    closingMoreOriginInfo = () => {
        document.body.style.overflowY = "scroll";
        this.setState({ showMoreAboutOrigin: false, showMoreBreedDesc: false });
    };

    render() {
        return (
            <SpecDogView
                data={this.state.data}
                showSlider={this.state.showSlider}
                showDogBreeds={this.state.showDogBreeds}
                showMoreAboutOrigin={this.state.showMoreAboutOrigin}
                showMoreBreedDesc={this.state.showMoreBreedDesc}
                closeDogBreeds={this.closeDogBreeds}
                dogBreedsClicked={this.dogBreedsClicked}
                sliderHandler={this.sliderHandler}
                openMoreAboutOrigin={this.openMoreAboutOrigin}
                openMoreBreedDesc={this.openMoreBreedDesc}
                closingMoreOriginInfo={this.closingMoreOriginInfo}
            />
        );
    }
}

export default SpecDogPageController;
