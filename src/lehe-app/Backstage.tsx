import React from 'react';

interface Props {
  onLeafClick: Function,
  rulesToggle: Function,  
  isPlayingGame: boolean,
  rulesOpen: boolean
}

const Backstage: React.FC<Props> = ({ onLeafClick, isPlayingGame, rulesToggle, rulesOpen }) => {
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
      <span className="leaf leaf1" onClick={ () => onLeafClick() }></span>
      <span className="leaf leaf2" onClick={ () => onLeafClick() }></span>
      <span className="leaf leaf3" onClick={ () => onLeafClick() }></span>
    </div>
    <button onClick={tgl} className='toggle-rules-button button-secondary button-small'>INFO JA REEGLID</button>       
  </> 
  );
}

export default Backstage;