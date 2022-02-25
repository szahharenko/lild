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
import { UserSubmitForm, VIEWS, CONTENT, animationTime, LeafElement, isRevealed }  from '../models/models'


const App: React.FC = () => {

  const [currentUser, setUser] = useState('');
  const [currentView, setView] = useState<VIEWS>(VIEWS.LOADING);
  const [tryCount, setTryCount] = useState<VIEWS>(0);
  const [currentContent, setContent] = useState<CONTENT>(CONTENT.WELCOME_ANIMATION);
  const [currentLeaf, setLeaf] = useState<LeafElement>(0);
  const [isPlayingGame, setPlayingGame] = useState<boolean>(false);
  const [rulesOpen, setRules] = useState<boolean>(false);
  const viewRef = useRef<HTMLDivElement>(null);

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
    setTimeout( () => { setView(VIEWS.READY) }, animationTime );
    setTimeout( () => { setContent(CONTENT.ABOUT) }, animationTime );
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
                  { currentContent === CONTENT.REGISTER && <RegForm toggleRules={toggleRules} onSuccess={registerGame}></RegForm> }
                  { currentContent === CONTENT.REGISTER_SUCCESS && <RegSuccess currentUser={currentUser}></RegSuccess> }
                  { currentContent === CONTENT.FAIL_RESULT && <GameFail buttonOnClick={tryAgain}></GameFail> }
                </>
              }
            </div>
          </div>
        }
      </div>
      { rulesOpen && <Rules rulesToggle={toggleRules}></Rules> }
      { isRevealed && <div className='logo'><svg xmlns="http://www.w3.org/2000/svg" width="61" height="61" viewBox="0 0 61 61">
      <g id="Logo_RGB" transform="translate(0 -0.127)">
        <rect id="Fläche_Weiß_RGB" data-name="Fläche Weiß RGB" width="61" height="61" transform="translate(0 0.127)" fill="#fff"/>
        <rect id="Fläche_Blau_RGB" data-name="Fläche Blau RGB" width="58.83" height="58.83" transform="translate(1 1.127)" fill="#0050aa"/>
        <path id="Kreis_Rot_RGB" data-name="Kreis Rot RGB" d="M31.846,3.99A27.858,27.858,0,1,0,59.7,31.856,27.866,27.866,0,0,0,31.846,3.99Z" transform="translate(-0.99 -0.863)" fill="#e60a14" fill-rule="evenodd"/>
        <path id="Kreis_Gelb_RGB" data-name="Kreis Gelb RGB" d="M33.471,7.38a26.094,26.094,0,1,0,26.091,26.1A26.1,26.1,0,0,0,33.471,7.38Z" transform="translate(-3.38 -3.253)" fill="#fff000" fill-rule="evenodd"/>
        <g id="Group_4028" data-name="Group 4028" transform="translate(7 21.127)">
          <path id="L" d="M79.53,48.2v1.77H80.9v6.148H79.53V57.9h11.6V53.052L86.37,55.7V49.97h1.374V48.2Z" transform="translate(-44.938 -42.687)" fill="#0050aa" fill-rule="evenodd"/>
          <path id="D" d="M63.544,48.2H55.72v1.77h1.369v6.148H55.72V57.9h7.824C69.328,57.9,69.385,48.2,63.544,48.2Zm-1.1,6.674h-.39v-3.66h.328C64.1,51.209,64.1,54.879,62.446,54.874Z" transform="translate(-33.523 -42.687)" fill="#0050aa" fill-rule="evenodd"/>
          <path id="i" d="M47.318,46.626v1.78L39.905,55.83l-.89-.9,1.369-1.369-3.706-3.717L35.34,51.192V49.406l5.315-5.32,4.6,4.6ZM39.973,37.61a2.918,2.918,0,1,0,2.92,2.915,2.915,2.915,0,0,0-2.92-2.915Z" transform="translate(-23.752 -37.61)" fill="#e60a14" fill-rule="evenodd"/>
          <path id="L-2" data-name="L" d="M13.08,48.2h8.2v1.77H19.915V55.7l4.753-2.644V57.9H13.08v-1.78h1.374V49.97H13.08Z" transform="translate(-13.08 -42.687)" fill="#0050aa" fill-rule="evenodd"/>
        </g>
      </g>
    </svg></div>
    }
    </div>
  );
}

export default App;