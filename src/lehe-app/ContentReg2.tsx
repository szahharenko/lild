import React from 'react';
import { CDN, isRevealed } from '../models/models';

interface Props {
  buttonOnClick: Function
}

const REG2: React.FC<Props> = ({ buttonOnClick }) => {
  return (
    <div className='prize fade-stack'>
      <div className='prize-in-animation'>
        <img src={`${CDN}bag${isRevealed ? '-reveal' : ''}.png`} alt='Riidest poekott'/>
        <img src={`${CDN}bag${isRevealed ? '-reveal' : ''}.png`} alt='Riidest poekott'/>
      </div>
      <h1>AUHIND</h1>
      <p>Riidest poekott,<br/>millega saab mugavalt poes käia.</p>
      <button onClick={ () => buttonOnClick(true) }>Tagasi</button>
    </div>
  );
}

export default REG2;