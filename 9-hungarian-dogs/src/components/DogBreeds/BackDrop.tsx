import * as React from "react";
import "./Less/BackDrop.css";

interface IProps {
    showDogBreeds?: boolean;
    closeDogBreeds?: () => void;
}

const backdrop: React.FC<IProps> = (props) => {
    return props.showDogBreeds ? (
        <div className={"backdrop"} onClick={props.closeDogBreeds} />
    ) : null;
};

export default backdrop;
