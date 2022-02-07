import React from 'react';

interface Props {
  buttonOnClick: Function,
  bubbleOnClick: Function
}

const REG1: React.FC<Props> = ({ buttonOnClick, bubbleOnClick }) => {
  return (
    <div className='reg fade-stack'>
      <h1>Värskus on<br/>kohe kohe siin!</h1>
      <p>Kui tunned, et sinu söögilaud vajab rohkem head ja värsket, oled õiges kohas.</p>
      <p>Mine mängi mängu ja liitu uudiskirjaga, nii püsid ka edaspidiselt kursis kõige värskemate pakkumistega.</p>
      <p>Uudiskirjaga liitunute vahel loosime välja XXX poekotti üllatustega.</p>
      <button onClick={ () => buttonOnClick(true) }>Osalen!</button>
      <div className='bubble'>
        <div className='info-buble' onClick={ () => bubbleOnClick(true) }>
          <div className='circles'></div>
          <h2>VAATA AUHINDA</h2>
        </div>
      </div>
    </div>
  );
}

export default REG1;