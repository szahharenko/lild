import React from 'react';
import { wrapLetters } from '../tools/tools';

interface Props {}

const Welcome: React.FC<Props> = () => {
  return (
    <div className='welcome'>
      <h1 className='letter-in'>
        { wrapLetters('Värskelt') }
        <br/>
        { wrapLetters('saabumas') }
      </h1>
    </div>
  );
}

export default Welcome;