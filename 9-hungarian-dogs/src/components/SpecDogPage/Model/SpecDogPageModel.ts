import { IResponseSpecDogPage } from "../DAO/SpecDogPageDAO";

export default class EventPageModel {
    section1: ISection1 | null = null;
    section2: ISection2 = {
        bgroundImage: "",
        title: "",
        text: "",
        link: ""
    };
    section3: IDogCharacteristics = {
        physique: {
            heightMale: "",
            heightFemale: "",
            weightMale: "",
            weightFemale: "",
            stature: ""
        },
        fur: {
            colour: "",
            furType: "",
            grooming: "",
            desc: ""
        },
        abilities: {
            teachability: "",
            barking: "",
            movementNeed: "",
            wAnimals: "",
            wChildren: "",
            roomie: ""
        }
    };
    section4: ISection2 = {
        bgroundImage: "",
        title: "",
        text: "",
        link: ""
    };
    section5: IDogGallery[] = [];
    section6: IMoreDogCard[] = [];

    constructor(data?: IResponseSpecDogPage) {
        if (data) {
            this.section1 = {
                bgroundImage: data.section1.bgroundImage,
                title: data.section1.title,
                title2: data.section1.title2
            };
            this.section2 = {
                bgroundImage: data.section2.bgroundImage,
                title: data.section2.title,
                text: data.section2.text,
                link: data.section2.link
            };

            this.section3 = {
                physique: {
                    heightMale: data.section3.physique.heightMale,
                    heightFemale: data.section3.physique.heightFemale,
                    weightMale: data.section3.physique.weightMale,
                    weightFemale: data.section3.physique.weightFemale,
                    stature: data.section3.physique.stature
                },
                fur: {
                    colour: data.section3.fur.colour,
                    furType: data.section3.fur.furType,
                    grooming: data.section3.fur.grooming,
                    desc: data.section3.fur.desc
                },
                abilities: {
                    teachability: data.section3.abilities.teachability,
                    barking: data.section3.abilities.barking,
                    movementNeed: data.section3.abilities.movementNeed,
                    wAnimals: data.section3.abilities.wAnimals,
                    wChildren: data.section3.abilities.wChildren,
                    roomie: data.section3.abilities.roomie
                }
            };

            this.section4 = {
                bgroundImage: data.section4.bgroundImage,
                title: data.section4.title,
                text: data.section4.text,
                link: data.section4.link
            };

            for (let i = 0; i < data.section5.length; i++) {
                const image: IDogGallery = {
                    src: data.section5[i].src,
                    name: data.section5[i].name
                };
                this.section5.push(image);
            }

            for (let i = 0; i < data.section6.length; i++) {
                const dogCard: IMoreDogCard = {
                    src: data.section6[i].src,
                    name: data.section6[i].name,
                    link: data.section6[i].link
                };
                this.section6.push(dogCard);
            }
        }
    }
}

interface SpecDogPage {
    section1: ISection1;
    section2: ISection2;
    section3: IDogCharacteristics;
    section4: ISection2;
    section5: IDogGallery[];
    section6: IMoreDogCard[];
}

interface ISection1 {
    bgroundImage: string;
    title: string;
    title2: string;
}

interface ISection2 {
    bgroundImage: string;
    title: string;
    text: string;
    link: string;
}

interface IDogCharacteristics {
    physique: IPhysique;
    fur: IFur;
    abilities: IAbilities;
}

export interface IPhysique {
    heightMale: string;
    heightFemale: string;
    weightMale: string;
    weightFemale: string;
    stature: string;
}

export interface IFur {
    colour: string;
    furType: string;
    grooming: string;
    desc: string;
}

export interface IAbilities {
    teachability: string;
    barking: string;
    movementNeed: string;
    wAnimals: string;
    wChildren: string;
    roomie: string;
}

export interface IMoreDogCard {
    src: string;
    name: string;
    link: string;
}

export interface IDogGallery {
    src: string;
    name: string;
}
