import {omnivaList} from './data/omniva';

export const wrapLetters = (word: string) => word.split('').map( (l,i) => <span key={i}>{l}</span>);

export async function postData(url = '', data = {}) {
    const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return await response.json();
}

export function getOmnivaList() {
    var sortedOmniva = omnivaList.sort( ([nameA, regionA, cityA],[nameB, regionB, cityB]) => cityA > cityB ? 1 : -1);
    //var locations = sortedOmniva.map( ([name, region, city]) => `${city}: ${name}` )
    return sortedOmniva;
}

export const getRandomFact = () : string => {
    const facts = [
        'Sinu külmkapp suudab säilitada toitu kauem kui arvad. Külmkapi koristamine eemaldab eelnevate toitude jäägid ja aitab hoida toitu kauem värskena!',
        'Eraldatuna säilib toit kõige paremini. Toidu korralik pakendamine aitab eemal hoida muud bakterid ning sinu toit püsib kauem värskena kui muidu!',
        'Toitude ette hakkimine võib olla mugav, kuid see tuleb värskuse arvelt. Ette hakitud viljad ei püsi värskena ja kaotavad enda maitse kiiremini kui hakkimata viljad. Tükelda oma viljad siis kui süüa teed.',
        'Ka taimed suhtlevad! Etüleen on signaali molekul, mis teatab viljale, et see peaks küpsema. Nii saab ka kiirendada teiste viljade küpsemist ja nii jõuabki sinu kõva avokaado kiiremini söögilauale!',
        'Vesi on hädavajalik meie jaoks. Veeta ei suuda keha õigesti toimida ja veepuudust on väljastpoolt näha. Juues piisavalt vett oled sa ise palju energilisem ja su nahk jätab ka tervema mulje!',
        'Tõuse ja sära! Valgus aitab meie kehadel aru saada, millal tegutseda ja millal puhata. Hommikul ärgates ava enda kardinad ja lase valgus sisse. See aitab tunda värskena ja tegusana!',
        'Maitsetaimed kuivavad kiirelt ja külmas olles kaotavad need oma maitse. Ostes pottides maitsetaimed ja neid kastes säilivad taimed kauem ja võimalik on ka ise neid kasvatada!'
    ]
    return facts[Math.floor(Math.random()*facts.length)];
  }