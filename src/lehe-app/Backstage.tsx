import React from 'react';
import { LeafElement } from '../tools/types';


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
    </div>
    <div className={`leafs ${isPlayingGame ? 'leafs__active' : ''}`}>
      {currentLeaf}
      <span className={`leaf leaf1 ${currentLeaf === 1 && 'leaf1__active'}`} onClick={ () => onLeafClick(1) }></span>
      <span className={`leaf leaf2 ${currentLeaf === 2 && 'leaf2__active'}`} onClick={ () => onLeafClick(2) }></span>
      <span className={`leaf leaf3 ${currentLeaf === 3 && 'leaf3__active'}`} onClick={ () => onLeafClick(3) }></span>
    </div>
    <button onClick={tgl} className='toggle-rules-button button-secondary button-small'>INFO JA REEGLID</button>
  </>
  );
}

export default Backstage;