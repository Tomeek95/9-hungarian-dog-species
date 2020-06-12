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
                    <Route exact path="/" component={PageController} />
                    <Route exact path="/spec-dog" component={SpecDogController} />
                    <Route exact path="/events" component={EventsController} />
                    <Route exact path="/event" component={EventController} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
