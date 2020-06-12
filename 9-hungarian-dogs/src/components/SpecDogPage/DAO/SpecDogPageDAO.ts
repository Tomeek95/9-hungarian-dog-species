import SpecDogPageModel from "../Model/SpecDogPageModel";

import vizsla from "../../../assets/vizsla.png";
import vizslaOrigin from "../../../assets/vizsla-eredet.png";
import vizslaBreedDesc from "../../../assets/vizsla-fajleiras.png";

import galleryImgOne from "../../../assets/img-gallery1.png";
import galleryImgTwo from "../../../assets/img-gallery2.png";
import galleryImgThree from "../../../assets/img-gallery3.png";

import kuvasz from "../../../assets/kuvasz2.png";
import puli from "../../../assets/puli2.png";

export default abstract class EventPageDAO {
    static getSpecDogPage = () => {
        const mockedData: IResponseSpecDogPage = {
            section1: {
                bgroundImage: vizsla,
                title: "Rövid szőrű magyar vizsla",
                title2: "A sok oldalú vadász kutya"
            },
            section2: {
                bgroundImage: vizslaOrigin,
                title: "Eredete",
                text:
                    "Története nem is olyan rég, az 1930-as évek táján kezdődött. Ekkor merült fel a gondolat, leginkább vadászok köreiben, hogy a rövidszőr magyar vizsla kiváló képességeit felhasználva és megőrizve, a téli nagyhideget még jobban elviselő fajtát hozzanak létre.",
                link: ""
            },
            section3: {
                physique: {
                    heightMale: "58-64",
                    heightFemale: "54-60",
                    weightMale: "22-30",
                    weightFemale: "20-26",
                    stature: "Nagy termetű"
                },
                fur: {
                    colour: "Zsemlesárga különböző árnyalatai",
                    furType: "Drótszőrű",
                    grooming: "Normál",
                    desc:
                        "Drótszőrű, testhez simuló, erősszálú, sűrű és fénytelen. fedőszőr 2-3 cm hosszú, sűrű, víztaszító aljszőrrel."
                },
                abilities: {
                    teachability: "Tanítható",
                    barking: "Csak okkal",
                    movementNeed: "Nagy mozgásigényű",
                    wAnimals: "Jól jön ki",
                    wChildren: "Szereti a gyerekeket",
                    roomie: "Igen"
                }
            },
            section4: {
                bgroundImage: vizslaBreedDesc,
                title: "Fajta leírás",
                text:
                    "Története nem is olyan rég, az 1930-as évek táján kezdődött. Ekkor merült fel a gondolat, leginkább vadászok köreiben, hogy a rövidszőrű magyar vizsla kiváló képességeit felhasználva és megőrizve, a téli nagy hideget még jobban elviselő fajtát hozzanak létre. A gondolaat felvetése nagy vitát váltott ki az akkori szakemberek között, de pár lelkes tenyésztő kitartása.",
                link: ""
            },
            section5: [
                { src: galleryImgOne, name: "vizsla" },
                { src: galleryImgTwo, name: "vizsla" },
                { src: galleryImgThree, name: "vizsla" }
            ],
            section6: [
                { src: kuvasz, name: "Kuvasz", link: "" },
                { src: puli, name: "Puli", link: "" }
            ]
        };
        return new SpecDogPageModel(mockedData);
    };
}

export interface IResponseSpecDogPage {
    section1: IResponseSection1;
    section2: IResponseSection2;
    section3: IResponseDogCharacteristics;
    section4: IResponseSection2;
    section5: IResponseDogGallery[];
    section6: IResponseMoreDogCard[];
}

interface IResponseSection1 {
    bgroundImage: string;
    title: string;
    title2: string;
}

interface IResponseSection2 {
    bgroundImage: string;
    title: string;
    text: string;
    link: string;
}

interface IResponseDogCharacteristics {
    physique: IResponsePhysique;
    fur: IResponseFur;
    abilities: IResponseAbilities;
}

interface IResponsePhysique {
    heightMale: string;
    heightFemale: string;
    weightMale: string;
    weightFemale: string;
    stature: string;
}

interface IResponseFur {
    colour: string;
    furType: string;
    grooming: string;
    desc: string;
}

interface IResponseAbilities {
    teachability: string;
    barking: string;
    movementNeed: string;
    wAnimals: string;
    wChildren: string;
    roomie: string;
}

interface IResponseMoreDogCard {
    src: string;
    name: string;
    link: string;
}

interface IResponseDogGallery {
    src: string;
    name: string;
}
