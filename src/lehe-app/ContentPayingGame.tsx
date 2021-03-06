import React from 'react';
import { isRevealed } from '../models/models';

interface Props {}
const PayingGame: React.FC<Props> = () => {
  return (
    <div className='thegame fade-stack'>
      <svg xmlns="http://www.w3.org/2000/svg" width="52.575" height="71.426" viewBox="0 0 52.575 71.426"><path id="Leheke_Icon" d="M60.349,5.886a16.114,16.114,0,0,0-.5-2.381,2.561,2.561,0,0,0-2.506-2,8.876,8.876,0,0,0-1.88.125C49.071,2,31.654,4.257,19,15.91.953,33.955,11.479,54.38,13.484,57.889v.627a14.333,14.333,0,0,0,14.41,14.41H42.3a.592.592,0,0,0,.627-.627A3.1,3.1,0,0,0,39.8,69.166h-11.9a10.657,10.657,0,0,1-10.651-9.774,23.208,23.208,0,0,0,3.133.125,40.565,40.565,0,0,0,30.2-13.533C63.231,32.326,61.6,13.154,60.349,5.886ZM47.818,43.478a36.787,36.787,0,0,1-29.823,12.28c1.754-4.135,6.892-14.16,19.423-24.184a.649.649,0,0,0,0-1l-1.378-1.754a.619.619,0,0,0-.877-.125c-11.9,9.523-17.543,18.922-19.924,24.059C12.356,46.235,8.6,31.825,21.754,18.542,33.784,7.389,51.2,5.635,56.465,5.259,57.467,10.773,59.973,30.321,47.818,43.478Z" transform="translate(-8.612 -1.5)" fill="#0050aa"/></svg>
      <h1>Lehe mäng!</h1>
      { isRevealed ?
        <>
          <p>Vali leht, pööra see ümber ja avasta, mis on selle all peidus.</p>
          <p>Võid teada saada huvitava fakti või võita võimaluse<br/> osaleda Lidli kinkekoti loosis.</p>
        </>
        :
        <>
          <p>Vali leht, kliki sellel ja avasta, mis on lehe all peidus.</p>
          <p>Võid teada saada huvitava fakti või võita võimaluse osaleda kinkekoti loosis.</p>
        </>
      }

    </div>
  );
}

export default PayingGame;