import * as React from "react";
import NavbarView from "../View/NavbarView";

interface INavbarProps {
    navbarComplexity: string;
    dogBreedsClicked: () => void;
}

interface INavbarState {
    navbarState: boolean;
    clickedNavbarButton: boolean;
    mobileNavbarButton: boolean;
}

class SpecDogPageController extends React.Component<INavbarProps, INavbarState> {
    state: INavbarState = {
        navbarState: true,
        clickedNavbarButton: false,
        mobileNavbarButton: false
    };

    componentDidMount = () => {
        window.addEventListener("scroll", this.handleScroll);
    };

    componentWillUnmount = () => {
        window.removeEventListener("scroll", this.handleScroll);
    };

    handleScroll = (event: any) => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        if (winScroll <= 60) {
            this.setState({
                navbarState: true,
                clickedNavbarButton: false
            });
        } else {
            this.setState({
                navbarState: false,
                clickedNavbarButton: false
            });
        }
    };

    switchingBackNavbar = () => {
        this.setState({ navbarState: true, clickedNavbarButton: true });
    };

    closingOrOpeningDroppdown = (closing: boolean, buttonIsClicked: boolean) => {
        if (buttonIsClicked) {
            const dummy: boolean = !this.state.mobileNavbarButton;
            this.setState({ mobileNavbarButton: dummy });
        } else {
            this.setState({ mobileNavbarButton: closing });
        }
    };

    functionWrapper = () => {
        this.props.dogBreedsClicked();
        this.closingOrOpeningDroppdown(false, false);
    };

    render() {
        return (
            <NavbarView
                mobileNavbarButton={this.state.mobileNavbarButton}
                navbarComplexity={this.props.navbarComplexity}
                navbarState={this.state.navbarState}
                clickedNavbarButton={this.state.clickedNavbarButton}
                functionWrapper={this.functionWrapper}
                switchingBackNavbar={this.switchingBackNavbar}
                dogBreedsClicked={this.props.dogBreedsClicked}
                closingOrOpeningDroppdown={this.closingOrOpeningDroppdown}
            />
        );
    }
}

export default SpecDogPageController;
