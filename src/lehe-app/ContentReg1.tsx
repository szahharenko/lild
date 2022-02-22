import React from 'react';
import { CDN } from '../models/models';

interface Props {
  buttonOnClick: Function,
  bubbleOnClick: Function
}

const REG1: React.FC<Props> = ({ buttonOnClick, bubbleOnClick }) => {
  return (
    <div className='reg fade-stack'>
      <h1>Värskus on <br/>kohe-kohe siin!</h1>
      <p>Kui tunned, et sinu söögilaud vajab rohkem head ja värsket, oled õiges kohas. Uuel nädalal kuulutame välja, mis täpselt tulemas on – igatahes midagi suurt!</p>
      <p>Praegu mine mängi mängu ja liitu uudiskirjaga, et püsida kursis kõige värskemate pakkumistega.</p>
      <p>Uudiskirjaga liitunute vahel loosime välja 2500 poekotti koos värskuse kataloogi ja šokolaadiga.</p>
      <button onClick={ () => buttonOnClick(true) }>OSALEN!</button>
      <div className='bubble'>
        <div className='info-buble' onClick={ () => bubbleOnClick(true) }>
          <div className='circles'></div>
          <div className='circle-inner'>
            <p>Mugav poekott koos värskuse kataloogi ja šokolaadiga.</p>
            <div className='prize-preview'>
              <img src={`${CDN}bag.png`} alt='Riidest poekott'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default REG1;