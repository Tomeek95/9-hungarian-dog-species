import React from "react";
import PageController from "./components/MainPage/Controller/MainPageController";
import SpecDogController from "./components/SpecDogPage/Controller/SpecDogController";
import EventsController from "./components/EventsPage/Controller/EventsController";
import EventController from "./components/ActualEvent/Controller/EventController";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./Utils/LessAccessories/base.css";

function App(){
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/9-hungarian-dog-species" component={PageController} />
                    <Route
                        exact
                        path="/9-hungarian-dog-species/spec-dog"
                        component={SpecDogController}
                    />
                    <Route
                        exact
                        path="/9-hungarian-dog-species/events"
                        component={EventsController}
                    />
                    <Route
                        exact
                        path="/9-hungarian-dog-species/event"
                        component={EventController}
                    />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
