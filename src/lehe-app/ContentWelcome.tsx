import React from 'react';
import { wrapLetters } from '../tools/tools';
import { isRevealed } from '../models/models';

interface Props {}

const Welcome: React.FC<Props> = () => {
  return (
    <div className='welcome'>
      { isRevealed ?
        <h1 className='letter-in'>
          { wrapLetters('Lidl on') }
          <br/>
          { wrapLetters('värskelt') }
          <br/>
          { wrapLetters('saabumas!') }
        </h1>
        :
        <h1 className='letter-in'>
          { wrapLetters('Värskelt') }
          <br/>
          { wrapLetters('saabumas!') }
        </h1>
      }
    </div>
  );
}

export default Welcome;