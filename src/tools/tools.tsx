import {omnivaList} from './data/omniva';
import {factList, loadingFactList} from './data/facts';
import { OmnivaLocation } from './data/omniva';

export const wrapLetters = (word: string) => word.split('').map( (l,i) => <span key={i}>{l}</span>);

export async function postData(url = '', data = {}) {
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data)
    });
    return await response.json();
}

let sortedOmniva : OmnivaLocation[] = [];
export function getOmnivaList() {
    if(sortedOmniva.length === 0) {
        sortedOmniva = omnivaList.sort( ([nameA, regionA, cityA],[nameB, regionB, cityB]) => cityA > cityB ? 1 : -1);
    }
    return sortedOmniva;
}

export const getRandomFact = () : string => {
    const randomIndex = Math.floor( Math.random() * factList.length );
    return factList[randomIndex];
}

export const getLoadingFact = () : string => {
    const randomIndex = Math.floor( Math.random() * loadingFactList.length );
    return loadingFactList[randomIndex];
}