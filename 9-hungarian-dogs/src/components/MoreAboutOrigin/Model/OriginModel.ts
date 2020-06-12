import { IResponseOrigin } from "../DAO/OriginDAO";

export default class MoreInfoModel {
    originData: IOrigin = {
        bgroundImage1: "",
        bgroundImage2: "",
        title1: "",
        title2: "",
        text1: "",
        text2: "",
        text3: ""
    };

    constructor(data?: IResponseOrigin) {
        if (data) {
            this.originData = {
                bgroundImage1: data.bgroundImage1,
                bgroundImage2: data.bgroundImage2,
                title1: data.title1,
                title2: data.title2,
                text1: data.text1,
                text2: data.text2,
                text3: data.text3
            };
        }
    }
}

interface IOrigin {
    bgroundImage1?: string;
    bgroundImage2: string;
    title1: string;
    title2: string;
    text1: string;
    text2: string;
    text3: string;
}
