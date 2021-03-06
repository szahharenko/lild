import React from 'react';
import { LeafElement } from '../models/models';

interface Props {
  onLeafClick: Function,
  rulesToggle: Function,
  isPlayingGame: boolean,
  rulesOpen: boolean,
  currentLeaf: LeafElement,
  isOver: boolean | undefined
}

const Backstage: React.FC<Props> = ({ onLeafClick, isPlayingGame, rulesToggle, rulesOpen, currentLeaf, isOver }) => {
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
    { isOver ? null : <>
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
    </>}
  </>
  );
}

export default Backstage;