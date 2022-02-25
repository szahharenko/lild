import React from 'react';
import { CDN, isRevealed } from '../models/models';

interface Props {
  buttonOnClick: Function,
  bubbleOnClick: Function
}

const REG1: React.FC<Props> = ({ buttonOnClick, bubbleOnClick }) => {
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
          <p>Kui tunned, et sinu söögilaud vajab rohkem head ja värsket, oled õiges kohas. Uuel nädalal kuulutame välja, mis täpselt tulemas on – igatahes midagi suurt!</p>
          <p>Praegu mine mängi mängu ja liitu uudiskirjaga, et püsida kursis kõige värskemate pakkumistega.</p>
          <p>Uudiskirjaga liitunute vahel loosime välja 2500 poekotti koos värskuse kataloogi ja šokolaadiga.</p>
        </>
      }
      <button onClick={ () => buttonOnClick(true) }>MÄNGI MÄNGU</button>
      <div className='bubble'>
        <div className='info-buble' onClick={ () => bubbleOnClick(true) }>
          <div className='circles'></div>
          <div className='circle-inner'>
              { isRevealed ?
                <h2>VAATA AUHINDA</h2>
                :
                <p>Mugav poekott koos värskuse kataloogi ja šokolaadiga.</p>
              }
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