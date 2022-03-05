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
import RegForm from './ContentRegForm';
import Rules from './Rules';
import SubscribeForm from './ContentSubscribe';
import { UserSubmitForm, VIEWS, CONTENT, animationTime, LeafElement, isRevealed, API } from '../models/models';
import { postData } from '../tools/tools';

interface IsOverResponse {
  status: number,
  isOver: boolean,
  diff: number
}

const App: React.FC = () => {

  const [currentUser, setUser] = useState('');
  const [currentView, setView] = useState<VIEWS>(VIEWS.LOADING);
  const [tryCount, setTryCount] = useState<VIEWS>(0);
  const [currentContent, setContent] = useState<CONTENT>(CONTENT.WELCOME_ANIMATION);
  const [currentLeaf, setLeaf] = useState<LeafElement>(0);
  const [isPlayingGame, setPlayingGame] = useState<boolean>(false);
  const [rulesOpen, setRules] = useState<boolean>(false);
  const viewRef = useRef<HTMLDivElement>(null);
  const [isOver, setIsOver] = useState<boolean | undefined>(undefined);

  const gamePlay = (leafNumber: LeafElement) : void => {
    setLeaf(leafNumber);
    switch(tryCount) {
      //case 0: setContent(CONTENT.FAIL_RESULT); break;
      case 0: setContent(Math.random() < 0.5 ? CONTENT.FAIL_RESULT : CONTENT.REGISTER); break;
      case 1: setContent(CONTENT.REGISTER); break;
    }
    setTryCount(tryCount+1);
    setPlayingGame(false);
  }

  const tryAgain = () => {
    setLeaf(0);
    setPlayingGame(true);
  }

  const registerGame = (data: UserSubmitForm) : void => {
    setUser(data.email);
    setContent(CONTENT.REGISTER_SUCCESS);
  }

  const startApp = () : void => {
    postData(`${API}time/`).then( (resp: IsOverResponse) => {
      setIsOver(resp.isOver);
      setTimeout( () => { setView(VIEWS.READY) }, animationTime );
      setTimeout( () => { setContent(CONTENT.ABOUT) }, animationTime );
    }).finally()
  }

  const toggleRules = () => setRules(!rulesOpen);

  const returnToGame = () : void => setContent(CONTENT.ABOUT)

  return (
    <div className='main-app'>
      <div className='app-container'>
        { currentView !== VIEWS.LOADING && <Backstage
            onLeafClick={gamePlay}
            currentLeaf={currentLeaf}
            isPlayingGame={isPlayingGame}
            rulesOpen={rulesOpen}
            isOver={isOver}
            rulesToggle={toggleRules}>
          </Backstage> }
        { currentView === VIEWS.LOADING && <Loading onLoadComplete={startApp}></Loading> }
        { currentView === VIEWS.READY &&
          <div className='content'>
            <div ref={viewRef} className='bounce-in'>
              {
                isOver ? <SubscribeForm toggleRules={toggleRules}></SubscribeForm> :
                isPlayingGame ? <PayingGame></PayingGame> :
                <>
                  { currentContent === CONTENT.WELCOME_ANIMATION && <Welcome></Welcome> }
                  { currentContent === CONTENT.ABOUT && <REG1 buttonOnClick={ () => setPlayingGame(true) } bubbleOnClick={ () => { setContent(CONTENT.BAG) }}></REG1> }
                  { currentContent === CONTENT.BAG && <REG2 buttonOnClick={returnToGame}></REG2> }
                  { currentContent === CONTENT.REGISTER && <RegForm toggleRules={toggleRules} onSuccess={registerGame}></RegForm> }
                  { currentContent === CONTENT.REGISTER_SUCCESS && <RegSuccess currentUser={currentUser}></RegSuccess> }
                  { currentContent === CONTENT.FAIL_RESULT && <GameFail buttonOnClick={tryAgain}></GameFail> }
                </>
              }
            </div>
          </div>
        }
      </div>
      { rulesOpen && <Rules rulesToggle={toggleRules} isOver={isOver}></Rules> }
      { isRevealed && <div className='logo'><img src="https://varskeltsaabumas.ee/img/lidl-logo.svg" alt="Lidl logo"/></div>
    }
    </div>
  );
}

export default App;