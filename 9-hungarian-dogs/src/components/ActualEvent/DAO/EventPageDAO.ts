import EventPageModel from "../Model/EventPageModel";
import eventImage from "../../../assets/vadasz.png";

import imgHeader from "../../../assets/vadasz.png";
import imgNormal from "../../../assets/origindog2.png";

export default abstract class EventPageDAO {
    static getEventPage = () => {
        const mockedData: IResponseEventPage = {
            eventTitle: "Magyar vizsla nemzetközi vadász vereseny",
            imgHeader: imgHeader,
            imgNormal: imgNormal,
            title1: "A sokoldalú kutya",
            title2: "Vadászat",
            text1:
                "A magyar vizslákra jellemző az elegáns megjelenés, a könnyed felépítés, a harmonikus mozgás.Testalkata szikár, a szépség és erő harmóniáját tükrözi. A rövid szőrű vizsla zsemleszínű szőrzete alig kíván gondozást. A lakásban tartott példányok szőre egész évben hullik, ezért rendszeres kefélést igényel. Középnagy, 52–61 cm marmagasságú, 19–24 kg súlyú (egyes megtermett példányok akár a 35 kg-ot is elérhetik), rendkívül elegáns megjelenésű és mozgású, kedves, engedelmes természetű, még a vizslák közül is kitűnik intelligenciájával.",
            text2:
                "A vizslák között a legsokoldalúbbnak tartják, amely egyedül végzi el a pointerek, szetterek és a többi vadászkutya munkáját, szóval igazi mindenes. Helyt kell állniuk vízen, mezőn, erdőben is. Kiváló a szaglásuk, a levegőben terjedő szagokat persze a körülményektől függően mint például páratartalom, szélerősség, hőmérséklet akár 150 méterről is megérzik így a megsebzett vadat is könnyen megtalálják és megfelelő távolságból „megállják”. Amikor megmozdul a vad, a vadásznak kell el döntenie, hogy lelőhető-e a vad vagy sem, ezalatt a vizslának egy helyben kell maradnia.",
            text3:
                "A lelőtt vadat készségesen a gazdájuk elé viszik. A rövid szőrű magyar vizsla nemcsak vadászkutya, hanem a család kedvence és a gyerekek játszópajtása is, hiszen intelligenciája, alkalmazkodóképessége minderre alkalmassá teszi. Nyugodt, jóindulatú, érzékeny, a durva bánásmódot nehezen viseli, de a szerető gazdának a csillagokat lehozná az égről. Rendkívül könnyen tanítható, de házőrzőnek nem alkalmas: a besurranót éppúgy körülrajongja, mint a közeli barátot. A drótszőrű magyar vizslával szemben a rövid szőrű inkább alkalmas lakásban tartásra, igazi „kanapé-specialista”, sőt télen a rövid szőrzete nem mindig nyújt megfelelő védelmet a metsző hideg ellen. Városi tenyészetekben túlfinomodik, betegségek iránt fogékonnyá válik, gyenge idegzetű lesz, noha szigorú és következetes tenyészkiválasztással a legjobb és modern vadászatra legalkalmasabb vizslát lehetne faragni belőle.",

            events: [
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
                }
            ]
        };
        return new EventPageModel(mockedData);
    };
}

export interface IResponseEventPage {
    eventTitle: string;
    imgHeader: string;
    imgNormal: string;
    title1: string;
    title2: string;
    text1: string;
    text2: string;
    text3: string;
    events: IResponseEvents[];
}

interface IResponseEvents {
    src: string;
    title: string;
    text: string;
    date: string;
    id: string;
    desc: string;
}
