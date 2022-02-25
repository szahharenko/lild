import React from 'react';
import { LeafElement, isRevealed } from '../models/models';

interface Props {
  onLeafClick: Function,
  rulesToggle: Function,
  isPlayingGame: boolean,
  rulesOpen: boolean,
  currentLeaf: LeafElement
}

const Backstage: React.FC<Props> = ({ onLeafClick, isPlayingGame, rulesToggle, rulesOpen, currentLeaf }) => {
  const tgl = () => {
    rulesToggle(!rulesOpen);
  }
  return (
    <>
    <div className={`backstage ${isPlayingGame ? 'backstage__overlay' : ''}`}>
      <span className='tree-top tree-top__right'></span>
      <span className='tree-top tree-top__left'></span>
      <span className='tree-top tree-top__bottom-left'></span>
    </div>
    <div className={`leafs ${isPlayingGame ? 'leafs__active' : ''}`}>
      <span className="leaf1-wrapper">
        <span className={`leaf leaf1 ${currentLeaf === 1 ? 'leaf1__active' : ''}`} onClick={ () => onLeafClick(1) }></span>
      </span>
      <span className="leaf2-wrapper">
        <span className={`leaf leaf2 ${currentLeaf === 2 ? 'leaf2__active' : ''}`} onClick={ () => onLeafClick(2) }></span>
      </span>
      <span className="leaf3-wrapper">
        <span className={`leaf leaf3 ${currentLeaf === 3 ? 'leaf3__active' : ''}`} onClick={ () => onLeafClick(3) }></span>
      </span>
      <span className="leaf4-wrapper">
        <span className={`leaf leaf4 ${currentLeaf === 4 ? 'leaf4__active' : ''}`} onClick={ () => onLeafClick(1) }></span>
      </span>
      <span className="leaf5-wrapper">
        <span className={`leaf leaf5 ${currentLeaf === 5 ? 'leaf5__active' : ''}`} onClick={ () => onLeafClick(2) }></span>
      </span>
      <span className="leaf6-wrapper">
        <span className={`leaf leaf6 ${currentLeaf === 6 ? 'leaf6__active' : ''}`} onClick={ () => onLeafClick(3) }></span>
      </span>
    </div>
    <button onClick={tgl} className='toggle-rules-button button-secondary button-small'>INFO JA REEGLID</button>
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
  </>
  );
}

export default Backstage;