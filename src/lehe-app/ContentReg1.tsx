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
      <p>Kui tunned, et sinu söögilaud vajab rohkem head ja värsket, oled õiges kohas.</p>
      <p>Mängi mängu ja liitu uudiskirjaga, nii püsid ka edaspidi kursis kõige värskemate pakkumistega.</p>
      <p>Uudiskirjaga liitunute vahel loosime välja 2500 poekotti koos kataloogi ja šokolaadiga. </p>
      <button onClick={ () => buttonOnClick(true) }>OSALEN!</button>
      <div className='bubble'>
        <div className='info-buble' onClick={ () => bubbleOnClick(true) }>
          <div className='circles'></div>
          <div className='circle-inner'>
            <h2>VAATA AUHINDA</h2>
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