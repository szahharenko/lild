import React, {useRef, useEffect} from 'react';
import { CDN } from './App';
let preLoaded = 0;

const preloadData = [
  'bottom.png',
  'top-left.png',
  'top-right.png',
  'steak-1.png',
  'leaf-2.png',
  'leaf-3.png',
  'leaf-1.png',
  'bag.png'
];

interface Props {
  onLoadComplete: Function
}
const Loading: React.FC<Props> = ({onLoadComplete}) => {
  
  const loaderRef = useRef<HTMLDivElement>(null);    
  const preloadCheck = () => {
    preLoaded === preloadData.length ? startApp() :  setTimeout(() => preloadCheck(), 2000);
  }
  useEffect(() => {
    //lets preload everyhing first
    preloadData.forEach((image) => {
      const img = new Image();
      img.onload = () => preLoaded++;      
      img.src = CDN + image;
    });
    preloadCheck();
  })
  const startApp = () => {
    loaderRef.current?.classList.add('bounce-out');
    onLoadComplete()      
  }

  return (
    <div className='loader'>
      <div ref={loaderRef}>
        <div>
          <h1>Lehekülg laeb</h1>
          <p>Kas teadsid?</p>
          <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
          <p><svg xmlns="http://www.w3.org/2000/svg" width="55.992" height="56.179" viewBox="0 0 55.992 56.179"><g id="Lehed_Icon" transform="translate(-2.417 -2.24)"><path id="Path_7386" data-name="Path 7386" d="M14.8,18.2A43.722,43.722,0,0,0,5,16.9H4.4a2.02,2.02,0,0,0-1.1,3.7c.1.1.2.2.3.2,1.5,1.6,3.8,5.5,4.6,14.4,0,1.6.5,19.3,22.9,23a12.542,12.542,0,0,1,1.5.2,2,2,0,0,0,1.9-.8c.2-.3.5-.7.7-1a24.746,24.746,0,0,0,2.7-6.7,24.636,24.636,0,0,0-3.8-19.2C30,24.6,23.4,20.3,14.8,18.2ZM33.6,52.9a49.012,49.012,0,0,0-4.3-10.6,68.677,68.677,0,0,0-8.9-12,.483.483,0,0,0-.7,0l-.1.1a2.478,2.478,0,0,0-.1,3.4,59.583,59.583,0,0,1,7.2,10,44.9,44.9,0,0,1,4.4,11.4c-20.3-3.6-20-19.3-19.9-20V35c-.7-8-2.6-12.5-4.3-15,6.2.5,18.4,2.7,24.6,12.3,5.7,8.8,3.9,16.5,2.1,20.6Z" fill="#0050aa"/><path id="Path_7387" data-name="Path 7387" d="M24.1,18.6a2.482,2.482,0,0,0,3.3-1.1c.8-1.7,1.9-4.1,3-6.9a46.423,46.423,0,0,0,1.5-4.4A35.738,35.738,0,0,1,39.2,18,2.359,2.359,0,0,0,42,19.6h.2c.3-.1.5-.3.4-.6C41,12.6,36.6,7,34,4.1L32.7,2.8a2.019,2.019,0,0,0-3.4,1.1v.2a39.7,39.7,0,0,1-1.7,5.5c-1.6,3.9-3.2,7.3-3.7,8.4C23.8,18.1,23.9,18.4,24.1,18.6Z" fill="#0050aa"/><path id="Path_7388" data-name="Path 7388" d="M56.8,20.5c-.4-.1-.8-.1-1.1-.2a25.87,25.87,0,0,0-11.5,1.1,32.254,32.254,0,0,0-9.2,5,.494.494,0,0,0-.1.7l.1.1a2.475,2.475,0,0,0,3.3.5,33.361,33.361,0,0,1,6.9-3.5c3.8-1.4,8.1-1.1,10.2-.9-.1,3.3-.8,12-4,17.2-2.7,4.3-7.3,7-9.9,8.3a2.484,2.484,0,0,0-1.3,3.1l.1.2a.446.446,0,0,0,.6.3c2-.7,9.2-3.8,13.1-10.2,3.5-5.8,4.2-14.9,4.4-18.5V22.6a1.845,1.845,0,0,0-1.6-2.1Z" fill="#0050aa"/><path id="Path_7389" data-name="Path 7389" d="M40.7,39.2a.494.494,0,0,0,.7-.1,64.225,64.225,0,0,1,6.3-6.4,2.493,2.493,0,0,0,.3-3.4l-.1-.1a.494.494,0,0,0-.7-.1,71.154,71.154,0,0,0-6.8,6.4A2.865,2.865,0,0,0,40.7,39.2Z" fill="#0050aa"/></g></svg></p>
        </div>
      </div>
    </div>
  );
}

export default Loading;