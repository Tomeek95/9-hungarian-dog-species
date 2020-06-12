import * as React from "react";
import SliderView from "../View/SliderView";
import { IDogGallery } from "../../SpecDogPage/Model/SpecDogPageModel";

interface IProps {
    images: IDogGallery[];
    sliderHandler: (showSlider: boolean) => void;
}

interface IState {
    imageCounter: number;
}

class SliderController extends React.Component<IProps, IState> {
    state: IState = {
        imageCounter: 0
    };

    nextImage = () => {
        let tmpCnt: number = this.state.imageCounter + 1;
        if (this.state.imageCounter === this.props.images.length - 1) {
            this.setState({ imageCounter: 0 });
        } else {
            this.setState({ imageCounter: tmpCnt });
        }
    };

    prevImage = () => {
        let tmpCnt: number = this.state.imageCounter - 1;
        if (this.state.imageCounter === 0) {
            this.setState({ imageCounter: this.props.images.length - 1 });
        } else {
            this.setState({ imageCounter: tmpCnt });
        }
    };
    render() {
        return (
            <SliderView
                images={this.props.images}
                imageCounter={this.state.imageCounter}
                nextImage={this.nextImage}
                prevImage={this.prevImage}
                sliderHandler={this.props.sliderHandler}
            />
        );
    }
}

export default SliderController;
