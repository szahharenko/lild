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
import { VIEWS, CONTENT, animationTime, LeafElement } from '../tools/types';
import RegForm from './ContentRegForm';
import { UserSubmitForm } from './ContentRegForm';
import Rules from './Rules';

export const API = 'https://dev.code-essence.eu/lidl/';
export const CDN = API + 'media/';

const App: React.FC = () => {

  const [currentView, setView] = useState<VIEWS>(VIEWS.LOADING);
  const [currentContent, setContent] = useState<CONTENT>(CONTENT.WELCOME_ANIMATION);
  const [currentLeaf, setLeaf] = useState<LeafElement>(0);
  const [isPlayingGame, setPlayingGame] = useState<boolean>(false);
  const [rulesOpen, toggleRules] = useState<boolean>(false);
  const viewRef = useRef<HTMLDivElement>(null);

  const gamePlay = (leafNumber: LeafElement) : void => {
    setLeaf(leafNumber)
    setContent(Math.random() < 0.8 ? CONTENT.FAIL_RESULT : CONTENT.REGISTER);
    setPlayingGame(false);
  }

  const tryAgain = () => {
    setLeaf(0);
    setPlayingGame(true);
  }

  const registerGame = ( userData: UserSubmitForm) : void => {
    console.log(userData);
    setContent(CONTENT.REGISTER_SUCCESS);
  }

  const startApp = () : void => {
    setTimeout( () => { setView(VIEWS.READY) }, animationTime );
    setTimeout( () => { setContent(CONTENT.ABOUT) }, animationTime * 3 );
  }

  const returnToGame = () : void => {
    setContent(CONTENT.ABOUT)
  }

  return (
    <div className='main-app'>
      <div className='app-container'>
        { currentView !== VIEWS.LOADING && <Backstage
            onLeafClick={gamePlay}
            currentLeaf={currentLeaf}
            isPlayingGame={isPlayingGame}
            rulesOpen={rulesOpen}
            rulesToggle={toggleRules}>
          </Backstage> }
        { currentView === VIEWS.LOADING && <Loading onLoadComplete={startApp}></Loading> }
        { currentView === VIEWS.READY &&
          <div className='content'>
            <div ref={viewRef} className='bounce-in'>
              { isPlayingGame ? <PayingGame></PayingGame> :
                <>
                  { currentContent === CONTENT.WELCOME_ANIMATION && <Welcome></Welcome> }
                  { currentContent === CONTENT.ABOUT && <REG1 buttonOnClick={ () => setPlayingGame(true) } bubbleOnClick={ () => { setContent(CONTENT.BAG) }}></REG1> }
                  { currentContent === CONTENT.BAG && <REG2 buttonOnClick={returnToGame}></REG2> }
                  { currentContent === CONTENT.REGISTER && <RegForm onSuccess={registerGame}></RegForm> }
                  { currentContent === CONTENT.REGISTER_SUCCESS && <RegSuccess></RegSuccess> }
                  { currentContent === CONTENT.FAIL_RESULT && <GameFail buttonOnClick={tryAgain}></GameFail> }
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