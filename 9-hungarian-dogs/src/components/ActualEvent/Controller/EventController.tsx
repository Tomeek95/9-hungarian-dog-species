import * as React from "react";
import EventView from "../View/EventView";
import EventPageDAO from "../DAO/EventPageDAO";
import EventPageModel from "../Model/EventPageModel";

interface IEventProps {
    history: any;
    location: any;
    match: any;
    staticContext?: any;
}

interface IEventState {
    data: EventPageModel;
    showMontage: boolean;
}

class EventController extends React.Component<IEventProps, IEventState> {
    state: IEventState = {
        data: new EventPageModel(),
        showMontage: false
    };
    componentDidMount() {
        this.setState({ data: EventPageDAO.getEventPage() });
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
            <EventView
                data={this.state.data}
                showMontage={this.state.showMontage}
                dogBreedsClicked={this.dogBreedsClicked}
                closeMontage={this.closeMontage}
            />
        );
    }
}

export default EventController;
