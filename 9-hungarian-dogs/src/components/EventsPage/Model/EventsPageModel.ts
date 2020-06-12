import { IResponseEvents } from "../DAO/EventsPageDAO";

export default class EventPageModel {
    events: IEvents[] = [];
    constructor(data?: IResponseEvents[]) {
        if (data) {
            for (let i = 0; i < data.length; i++) {
                const event: IEvents = {
                    src: data[i].src,
                    title: data[i].title,
                    text: data[i].text,
                    date: data[i].date,
                    id: data[i].id,
                    desc: data[i].desc
                };
                this.events.push(event);
            }
        }
    }
}

export interface IEvents {
    src: string;
    title: string;
    text: string;
    date: string;
    id: string;
    desc: string;
}
