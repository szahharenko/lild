import React from 'react';
import { CDN, isRevealed } from '../models/models';
import { GA } from '../tools/tools';

interface Props {
  buttonOnClick: Function,
  bubbleOnClick: Function
}

const REG1: React.FC<Props> = ({ buttonOnClick, bubbleOnClick }) => {

  const buttonAction = () => {
    GA('event', 'play_game', {'p': isRevealed ? 'Yes' : 'No'});
    buttonOnClick(true)
  }
  return (
    <div className='reg fade-stack'>
      { isRevealed ?
        <>
          <h1>Lidl toob<br/>head ja värsket<br/>otse sinuni!</h1>
          <p>Kui tunned, et sinu söögilaud vajab rohkem head ja värsket, oled õiges kohas.</p>
          <p>Mine mängi Lidli mängu ja liitu uudiskirjaga, nii püsid ka edaspidi kursis kõige värskemate pakkumistega.</p>
          <p>Uudiskirjaga liitunute vahel loosime välja 2500 Lidli poekotti koos värskuse kataloogi ja šokolaadiga.</p>
        </>
        :
        <>
          <h1>Värskus on <br/>kohe-kohe siin!</h1>
          <p>Midagi suurt on tulemas – uuel nädalal kuulutame välja, mis see täpselt on.</p>
          <p>Praegu mine mängi mängu ja liitu uudiskirjaga, et sinu söögilauale jõuaks rohkem head ja värsket.</p>
          <p>Uudiskirjaga liitunute vahel loosime välja 2500 poekotti koos värskuse kataloogi ja šokolaadiga.</p>
        </>
      }
      <button onClick={ buttonAction }>MÄNGI MÄNGU</button>
      <div className='bubble'>
        <div className='info-buble' onClick={ () => bubbleOnClick(true) }>
          <div className='circles'></div>
          <div className='circle-inner'>
              <h2>VAATA AUHINDA</h2>
            <div className='prize-preview'>
              <img src={`${CDN}bag${isRevealed ? '-reveal' : ''}.png`} alt='Riidest poekott'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default REG1;