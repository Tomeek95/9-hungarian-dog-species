import * as React from "react";
import OriginDAO from "../DAO/OriginDAO";
import OriginModel from "../Model/OriginModel";
import OriginView from "../View//OriginView";

interface IOriginProps {
    isOpen: boolean;
    moreInfo: string;
    closingMoreOriginInfo: () => void;
}

interface IOriginState {
    data: OriginModel;
}

class OriginController extends React.Component<IOriginProps, IOriginState> {
    state: IOriginState = {
        data: new OriginModel()
    };

    componentDidMount = () => {
        if (this.props.moreInfo === "origin") {
            this.setState({ data: OriginDAO.getMoreOriginInfo() });
        } else {
            this.setState({ data: OriginDAO.getMoreBreedDesc() });
        }
    };

    render() {
        return (
            <OriginView
                isOpen={this.props.isOpen}
                moreInfo={this.props.moreInfo}
                data={this.state.data}
                closingMoreOriginInfo={this.props.closingMoreOriginInfo}
            />
        );
    }
}

export default OriginController;
