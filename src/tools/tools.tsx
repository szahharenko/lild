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