import * as React from "react";
import EventsView from "../View/EventsView";
import EventsPageDAO from "../DAO/EventsPageDAO";
import EventsPageModel from "../Model/EventsPageModel";

interface IProjectProps {
    history: any;
    location: any;
    match: any;
    staticContext?: any;
}

interface IProjectState {
    data: EventsPageModel;
    showMontage: boolean;
}

class EventsController extends React.Component<IProjectProps, IProjectState> {
    state: IProjectState = {
        data: new EventsPageModel(),
        showMontage: false
    };
    componentDidMount() {
        this.setState({ data: EventsPageDAO.getEventPage() });
    }

    dogBreedsClicked = () => {
        if (window.innerWidth <= 600) {
            document.body.style.overflow = "hidden";
        }
        this.setState({ showMontage: true });
    };

    closeMontage = () => {
        document.body.style.overflowY = "scroll";
        this.setState({ showMontage: false });
    };

    render() {
        return (
            <EventsView
                data={this.state.data}
                showMontage={this.state.showMontage}
                dogBreedsClicked={this.dogBreedsClicked}
                closeMontage={this.closeMontage}
            />
        );
    }
}

export default EventsController;
