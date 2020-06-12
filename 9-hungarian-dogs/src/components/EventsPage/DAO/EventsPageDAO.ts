import EventPageModel from "../Model/EventsPageModel";
import eventImage from "../../../assets/vadasz.png";

export default abstract class EventPageDAO {
    static getEventPage = () => {
        const mockedData: IResponseEvents[] = [
            {
                src: eventImage,
                title: "Magyar vizsla nemzetközi vadász verseny",
                text:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.",
                date: "2020.02.12",
                id: "1",
                desc: ""
            },
            {
                src: eventImage,
                title: "Magyar vizsla nemzetközi vadász verseny",
                text:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.",
                date: "2020.02.12",
                id: "2",
                desc: ""
            },
            {
                src: eventImage,
                title: "Magyar vizsla nemzetközi vadász verseny",
                text:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.",
                date: "2020.02.12",
                id: "3",
                desc: ""
            }
        ];
        return new EventPageModel(mockedData);
    };
}

export interface IResponseEvents {
    src: string;
    title: string;
    text: string;
    date: string;
    id: string;
    desc: string;
}
