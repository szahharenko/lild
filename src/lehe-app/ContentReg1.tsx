import React from 'react';

interface Props {
  buttonOnClikc: Function,
  bubbleOnClikc: Function
}

const REG1: React.FC<Props> = ({ buttonOnClikc, bubbleOnClikc }) => {
  return (
    <div className='reg fade-stack'>
      <h1>Värskus on<br/>kohe kohe siin!</h1>
      <p>Kui tunned, et sinu söögilaud vajab rohkem head ja värsket, oled õiges kohas.</p>
      <p>Mine mängi mängu ja liitu uudiskirjaga, nii püsid ka edaspidiselt kursis kõige värskemate pakkumistega.</p>
      <p>Uudiskirjaga liitunute vahel loosime välja XXX poekotti üllatustega.</p>
      <button onClick={ () => buttonOnClikc(true) }>Osalen!</button>
      <div className='info-buble' onClick={ () => bubbleOnClikc(true) }>
        <h2>VAATA AUHINDA</h2>
      </div>      
    </div>
  );
}

export default REG1;