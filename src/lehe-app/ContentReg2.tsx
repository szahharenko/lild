import React from 'react';
import { CDN } from './App';

interface Props {
  buttonOnClikc: Function
}

const REG2: React.FC<Props> = ({ buttonOnClikc }) => {
  return (
    <div className='prize fade-stack'>
      <h1>AUHIND</h1>
      <p>Riidest poekott,<br/>millega saab mugavalt poes käia.</p>
      <p><img src={`${CDN}bag.png`} alt='Riidest poekott'/></p>
      <button onClick={ () => buttonOnClikc(true) }>Tagasi</button>
    </div>
  );
}

export default REG2;