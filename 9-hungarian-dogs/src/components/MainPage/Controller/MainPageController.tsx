import * as React from "react";
import MainPageView from "../View/MainPageView";

interface IProjectProps {
    history: any;
    location: any;
    match: any;
    staticContext?: any;
}

interface IProjectState {
    value: boolean;
}

class PageController extends React.Component<IProjectProps, IProjectState> {
    state: IProjectState = {
        value: false
    };

    dummyDogBreedsClicked = () => {
        this.setState({ value: true });
    };

    render() {
        return (
            <div>
                <MainPageView dummyDogBreedsClicked={this.dummyDogBreedsClicked} />
            </div>
        );
    }
}

export default PageController;
