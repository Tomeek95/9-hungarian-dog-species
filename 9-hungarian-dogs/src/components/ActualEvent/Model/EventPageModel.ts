import { IResponseEventPage } from "../DAO/EventPageDAO";

export default class EventPageModel {
    eventTitle: string = "";
    imgHeader: string = "";
    imgNormal: string = "";
    title1: string = "";
    title2: string = "";
    text1: string = "";
    text2: string = "";
    text3: string = "";
    events: IEvents[] = [];
    constructor(data?: IResponseEventPage) {
        if (data) {
            this.eventTitle = data.eventTitle;
            this.imgHeader = data.imgHeader;
            this.imgNormal = data.imgNormal;
            this.title1 = data.title1;
            this.title2 = data.title2;
            this.text1 = data.text1;
            this.text2 = data.text2;
            this.text3 = data.text3;
            for (let i = 0; i < data.events.length; i++) {
                const event: IEvents = {
                    src: data.events[i].src,
                    title: data.events[i].title,
                    text: data.events[i].text,
                    date: data.events[i].date,
                    id: data.events[i].id,
                    desc: data.events[i].desc
                };
                this.events.push(event);
            }
        }
    }
}

export interface IEventPage {
    eventTitle: string;
    imgHeader: string;
    imgNormal: string;
    title1: string;
    title2: string;
    text1: string;
    text2: string;
    text3: string;
    events: IEvents[];
}

interface IEvents {
    src: string;
    title: string;
    text: string;
    date: string;
    id: string;
    desc: string;
}
