import React, { useState, useRef } from 'react';
import './assets/lehe-app.scss';
import REG1 from './ContentReg1';
import REG2 from './ContentReg2';
import GameFail from './ContentGameFail';
import RegSuccess from './ContentRegSuccess';
import PayingGame from './ContentPayingGame';
import Loading from './Loading';
import Welcome from './ContentWelcome';
import Backstage from './Backstage';
import { VIEWS, CONTENT, animationTime } from '../tools/types';
import RegForm from './ContentRegForm';
import { UserSubmitForm } from './ContentRegForm';
import Rules from './Rules';

export const CDN = 'https://dev.code-essence.eu/lidl/media/';

const App: React.FC = () => {
  
  const [currentView, setView] = useState(0);
  const [currentContent, setContent] = useState(0);  
  const [isPlayingGame, setPlayingGame] = useState(false);    
  const [rulesOpen, toggleRules] = useState(false);      
  const viewRef = useRef<HTMLDivElement>(null);    

  const gamePlay = () : void => {
    setContent(Math.random() > 0.5 ? CONTENT.FAILRESULT : CONTENT.REGISTER);
    setPlayingGame(false);
  }

  const registerGame = ( userData: UserSubmitForm) : void => {
    setContent(CONTENT.REGISTERSUCCESS);
  }

  const startApp = () : void => {
    setTimeout( () => { setView(VIEWS.WELCOME) }, animationTime + 100 );
    setTimeout( () => { setContent(CONTENT.ABOUT) }, animationTime * 3 + 100 );    
  }

  return (
    <div className='main-app'>
      <div className='app-container'>
        { currentView !== VIEWS.LOADING && <Backstage onLeafClick={gamePlay} isPlayingGame={isPlayingGame} rulesOpen={rulesOpen} rulesToggle={toggleRules}></Backstage> }
        { currentView === VIEWS.LOADING && <Loading onLoadComplete={startApp}></Loading> }        
        { currentView === VIEWS.WELCOME && 
          <div className='content'>
            <div ref={viewRef} className='bounce-in'>
              { isPlayingGame ? <PayingGame></PayingGame> :
                <>
                  { currentContent === CONTENT.WELCOME && <Welcome></Welcome> }
                  { currentContent === CONTENT.ABOUT && <REG1 buttonOnClikc={ () => setPlayingGame(true) } bubbleOnClikc={ () => { setContent(CONTENT.BAG) }}></REG1> }
                  { currentContent === CONTENT.BAG && <REG2 buttonOnClikc={ () => { setContent(CONTENT.ABOUT) } }></REG2> }      
                  { currentContent === CONTENT.REGISTER && <RegForm onSuccess={registerGame}></RegForm> }
                  { currentContent === CONTENT.REGISTERSUCCESS && <RegSuccess></RegSuccess> }                  
                  { currentContent === CONTENT.FAILRESULT && <GameFail buttonOnClikc={() => setPlayingGame(true)}></GameFail> }
                </>
              }
            </div>
          </div>
        }
      </div>      
      { rulesOpen && <Rules rulesToggle={toggleRules}></Rules> }
    </div>
  );
}

export default App;