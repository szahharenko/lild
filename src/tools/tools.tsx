import {omnivaList} from './data/omniva';
import {factList} from './data/facts';

export const wrapLetters = (word: string) => word.split('').map( (l,i) => <span key={i}>{l}</span>);

export async function postData(url = '', data = {}) {
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data)
    });
    return await response.json();
}

export function getOmnivaList() {
    var sortedOmniva = omnivaList.sort( ([nameA, regionA, cityA],[nameB, regionB, cityB]) => cityA > cityB ? 1 : -1);
    return sortedOmniva;
}

export const getRandomFact = () : string => {
    const randomIndex = Math.floor( Math.random() * factList.length );
    return factList[randomIndex];
}