import {omnivaList} from './data/omniva';
import {factList, factListRevealed, loadingFactList, loadingFactListRevealed} from './data/facts';
import { OmnivaLocation } from './data/omniva';
import { isRevealed } from '../models/models';

export const wrapLetters = (word: string) => word.split('').map( (l,i) => <span key={i}>{ l === '' ? '&nbsp;' : l}</span>);

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
    const facts = isRevealed ? factListRevealed : factList;
    const randomIndex = Math.floor( Math.random() * facts.length );
    return facts[randomIndex];
}

export const getLoadingFact = () : string => {
    const facts = isRevealed ? loadingFactListRevealed : loadingFactList;
    const randomIndex = Math.floor( Math.random() * facts.length );
    return facts[randomIndex];
}

declare global {
    interface Window {
      gtag: Function;
    }
  }
export const GA = window.gtag || function() { };
