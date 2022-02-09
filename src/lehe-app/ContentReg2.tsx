import React from 'react';
import { CDN } from '../models/models';

interface Props {
  buttonOnClick: Function
}

const REG2: React.FC<Props> = ({ buttonOnClick }) => {
  return (
    <div className='prize fade-stack'>
      <h1>AUHIND</h1>
      <p>Riidest poekott,<br/>millega saab mugavalt poes käia.</p>
      <p><img src={`${CDN}bag.png`} alt='Riidest poekott'/></p>
      <button onClick={ () => buttonOnClick(true) }>Tagasi</button>
    </div>
  );
}

export default REG2;