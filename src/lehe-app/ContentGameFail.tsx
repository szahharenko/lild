import React from 'react';

interface Props {
  buttonOnClick: Function
}

const getRandomFact = () : string => {
  const facts = [
    'Chuck Norris threw a grenade and killed 50 people, then it exploded.',
    'Chuck Norris knows Victoria\'s secret.',
    'Chuck Norris counted to infinity. Twice.',
    'When Chuck Norris enters a room, he doesn\'t turn the lights on, he turns the dark off.',
    'Chuck Norris can strangle you with a cordless phone.',
    'Death once had a near-Chuck-Norris experience.',
    'Once a cobra bit Chuck Norris\' leg. After five days of excruciating pain, the cobra died.',
    'Leading hand sanitizers claim they can kill 99.9 percent of germs. Chuck Norris can kill 100 percent of whatever the hell he wants.',
    'Chuck Norris can do a wheelie on a unicycle.'
  ]
  return facts[Math.floor(Math.random()*facts.length)];
}

const GameFail: React.FC<Props> = ({ buttonOnClick }) => {
  return (
    <div className='result fade-stack'>
      <svg xmlns="http://www.w3.org/2000/svg" width="48.843" height="55.989" viewBox="0 0 48.843 55.989"><g id="Apelsin_Icon" transform="translate(-5.292 -2.511)"><circle id="Ellipse_6" data-name="Ellipse 6" cx="1.62" cy="1.62" r="1.62" transform="translate(26.76 21.493)" fill="#0050aa"/><path id="Path_7390" data-name="Path 7390" d="M40.811,19.122a1.62,1.62,0,1,0,1.62,1.62A1.62,1.62,0,0,0,40.811,19.122Z" fill="#0050aa"/><circle id="Ellipse_7" data-name="Ellipse 7" cx="1.62" cy="1.62" r="1.62" transform="translate(34.8 25.38)" fill="#0050aa"/><path id="Path_7391" data-name="Path 7391" d="M14.937,25.2l-.141-.077a.509.509,0,0,0-.694.208,19.543,19.543,0,0,0-1.6,13.177A21.012,21.012,0,0,0,13.524,41.9a.5.5,0,0,0,.667.269l.143-.062a2.5,2.5,0,0,0,1.41-2.986q-.174-.608-.309-1.241a16.842,16.842,0,0,1,.647-9.64,2.474,2.474,0,0,0-1.145-3.04Z" fill="#0050aa"/><path id="Path_7392" data-name="Path 7392" d="M17.469,20.284a1.62,1.62,0,1,0,1.923,1.246A1.62,1.62,0,0,0,17.469,20.284Z" fill="#0050aa"/><path id="Path_7393" data-name="Path 7393" d="M36.725,9.132a10.833,10.833,0,0,0-4.563.026c-.188.027-.363.049-.545.074a6.772,6.772,0,0,1,1.778-2.977c.019-.019.049-.046.088-.08a2.513,2.513,0,0,0,.4-3.412l-.037-.05a.5.5,0,0,0-.7-.1l-.8.6a10.024,10.024,0,0,0-2.769,3.169c-1.726-1.7-5.679-2.827-10.784-1.2-4.074,1.3-6.333,3.5-8.517,5.623a29.469,29.469,0,0,1-3.185,2.815L5.706,14.622a1,1,0,0,0,.651,1.806l1.709-.106c.026,0,1.94-.118,4.508-.157a26.252,26.252,0,0,0-6.71,18.2C5.864,47.222,17.143,58.5,30,58.5S54.136,47.222,54.136,34.364c0-12.407-6.672-22.076-17.411-25.233ZM12.366,12.947C14.39,10.977,16.3,9.116,19.7,8.033c4.778-1.522,7.591.05,7.857.532a4.207,4.207,0,0,1-.979,2.646,6.138,6.138,0,0,1-4.75,2.3,21.375,21.375,0,0,1-3.4-.158c-.9-.088-1.837-.18-2.79-.194-.5-.007-.99-.011-1.468-.011-.713,0-1.4.007-2.035.019l.23-.224ZM30,55.5c-11.259,0-21.136-9.877-21.136-21.136,0-7.506,2.848-13.932,8.017-18.136.411.032.827.073,1.255.114a24.03,24.03,0,0,0,3.882.167,9.355,9.355,0,0,0,6.482-2.93v.3a2.5,2.5,0,0,0,2.5,2.5.5.5,0,0,0,.5-.5V12.855a6.739,6.739,0,0,1,1.612,1.5A2.483,2.483,0,0,0,36.165,15l.247-.124a.5.5,0,0,0,.212-.691A13.548,13.548,0,0,0,34.962,11.9a3.522,3.522,0,0,1,.917.106c9.411,2.767,15.257,11.333,15.257,22.355C51.136,45.623,41.259,55.5,30,55.5Z" fill="#0050aa"/></g></svg>
      <h1>Võitsid<br/>värskendava fakti!</h1>

      <p>{ getRandomFact() }</p>
      <p><strong>Loosis osalemiseks leia õige leht!</strong></p>
      <p><button onClick={ () => buttonOnClick() }>Mängi uuesti!</button></p>
    </div>
  );
}

export default GameFail;