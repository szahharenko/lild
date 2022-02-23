import React, { useState } from 'react';
import {FacebookShareButton } from "react-share";
import { postData } from '../tools/tools'
import { API } from '../models/models';

const SHARE_URL = 'https://xn--vrskus-bua.ee/';
const SHARE_QUOTE = 'Värskelt saabumas! Midagi suurt on kohe-kohe tulekul! Seniks tule mängi ja osale auhinnaloosis! Loosimisel on 2500 poekotti koos värskuse kataloogi ja šokolaadiga. Võitmiseks vali õige leht ja liitu uudiskirjaga – nii osaledki poekoti loosis.';

interface Props {
  currentUser: string
}

const RegSuccess: React.FC<Props> = ({currentUser}) => {

  const [shared, setShared] = useState(false);
  const addExtraLike = () => {
    setShared(true)
    postData(API, {action: 'like', email: currentUser});
  }

  return (
    <div className='result'>
      <h1 className='caps'>Oled liitunud <br/>värskuse uudiskirjaga.</h1>
      <p><strong>Psst! </strong><br/>Kui jagad seda mängu, suurendad oma võiduvõimalusi.</p>
      { !shared &&
        <FacebookShareButton onClick={addExtraLike} url={SHARE_URL} quote={SHARE_QUOTE} className="Fb">
        <svg xmlns="http://www.w3.org/2000/svg" width="75.574" height="27.503" viewBox="0 0 75.574 27.503"> <g id="FB_Share" data-name="FB Share" transform="translate(20.738 120.804)"> <path id="Path_7379" data-name="Path 7379" d="M52.259-120.8h-70.42a2.824,2.824,0,0,0-2.577,3V-96.3A2.816,2.816,0,0,0-18.161-93.3h70.42A2.816,2.816,0,0,0,54.836-96.3v-21.513A2.824,2.824,0,0,0,52.259-120.8Z" fill="#1877f2" fillRule="evenodd"/> <g id="Group_4026" data-name="Group 4026"> <g id="Group_4025" data-name="Group 4025"> <path id="Path_7380" data-name="Path 7380" d="M9.441-105.389l1.875-.182A2.284,2.284,0,0,0,12-104.185a2.079,2.079,0,0,0,1.4.443,2.152,2.152,0,0,0,1.4-.394,1.174,1.174,0,0,0,.471-.921.869.869,0,0,0-.2-.576,1.581,1.581,0,0,0-.693-.414q-.339-.117-1.543-.417a5.218,5.218,0,0,1-2.174-.943,2.482,2.482,0,0,1-.879-1.92,2.456,2.456,0,0,1,.413-1.364,2.592,2.592,0,0,1,1.191-.967,4.783,4.783,0,0,1,1.878-.332,4.029,4.029,0,0,1,2.7.788,2.783,2.783,0,0,1,.954,2.1L15-109.015a1.64,1.64,0,0,0-.531-1.058,1.94,1.94,0,0,0-1.22-.322,2.2,2.2,0,0,0-1.315.345.694.694,0,0,0-.306.592.73.73,0,0,0,.286.579,5.059,5.059,0,0,0,1.771.639,9.366,9.366,0,0,1,2.08.686,2.688,2.688,0,0,1,1.055.97,2.845,2.845,0,0,1,.38,1.52,2.807,2.807,0,0,1-.456,1.536,2.716,2.716,0,0,1-1.288,1.064,5.392,5.392,0,0,1-2.077.349,4.14,4.14,0,0,1-2.78-.836A3.644,3.644,0,0,1,9.441-105.389Z" fill="#fff"/> <path id="Path_7381" data-name="Path 7381" d="M20.364-111.827v3.508a2.7,2.7,0,0,1,2.115-1.035,2.673,2.673,0,0,1,1.139.235,1.865,1.865,0,0,1,.766.6,2.171,2.171,0,0,1,.351.807,7.214,7.214,0,0,1,.094,1.373v4.056H23v-3.652a5.428,5.428,0,0,0-.1-1.38.9.9,0,0,0-.368-.465,1.176,1.176,0,0,0-.661-.173,1.518,1.518,0,0,0-.813.221,1.278,1.278,0,0,0-.524.667,3.982,3.982,0,0,0-.166,1.319v3.463h-1.83v-9.543Z" fill="#fff"/> <path id="Path_7382" data-name="Path 7382" d="M27.785-107.088l-1.66-.3a2.59,2.59,0,0,1,.964-1.484,3.522,3.522,0,0,1,2.03-.482,4.379,4.379,0,0,1,1.823.29,1.812,1.812,0,0,1,.843.736,3.764,3.764,0,0,1,.244,1.637l-.019,2.135a7.483,7.483,0,0,0,.087,1.344,3.984,3.984,0,0,0,.329.928h-1.81c-.047-.122-.106-.3-.175-.54-.031-.109-.052-.181-.065-.215a3.319,3.319,0,0,1-1,.683,2.868,2.868,0,0,1-1.139.228,2.35,2.35,0,0,1-1.682-.58,1.92,1.92,0,0,1-.616-1.464,1.971,1.971,0,0,1,.28-1.045,1.83,1.83,0,0,1,.785-.7,6.091,6.091,0,0,1,1.454-.426,9.9,9.9,0,0,0,1.778-.45v-.182a.947.947,0,0,0-.261-.752,1.564,1.564,0,0,0-.983-.224,1.307,1.307,0,0,0-.761.192A1.339,1.339,0,0,0,27.785-107.088Zm2.448,1.484q-.353.117-1.114.28a3.329,3.329,0,0,0-1,.319.764.764,0,0,0-.358.644.9.9,0,0,0,.287.664,1,1,0,0,0,.729.28,1.589,1.589,0,0,0,.944-.325,1.145,1.145,0,0,0,.436-.606,3.585,3.585,0,0,0,.072-.891Z" fill="#fff"/> <path id="Path_7383" data-name="Path 7383" d="M35.317-102.284H33.488V-109.2h1.7v.982a2.952,2.952,0,0,1,.785-.917,1.439,1.439,0,0,1,.79-.222,2.324,2.324,0,0,1,1.2.346l-.566,1.594a1.611,1.611,0,0,0-.86-.3,1.016,1.016,0,0,0-.651.211,1.452,1.452,0,0,0-.42.765,10.89,10.89,0,0,0-.152,2.317Z" fill="#fff"/> <path id="Path_7384" data-name="Path 7384" d="M42.49-104.485l1.823.307a3,3,0,0,1-1.11,1.526,3.264,3.264,0,0,1-1.9.524,3.1,3.1,0,0,1-2.669-1.178,3.966,3.966,0,0,1-.683-2.383,3.822,3.822,0,0,1,.9-2.692,2.963,2.963,0,0,1,2.272-.973,3.07,3.07,0,0,1,2.435,1.019,4.512,4.512,0,0,1,.852,3.121H39.828a1.858,1.858,0,0,0,.442,1.267,1.387,1.387,0,0,0,1.055.452,1.118,1.118,0,0,0,.723-.235A1.441,1.441,0,0,0,42.49-104.485Zm.1-1.848a1.761,1.761,0,0,0-.41-1.208,1.259,1.259,0,0,0-.95-.413,1.272,1.272,0,0,0-.99.436,1.687,1.687,0,0,0-.383,1.185Z" fill="#fff"/> </g> <path id="Path_7385" data-name="Path 7385" d="M6.457-106.983a8.385,8.385,0,0,0-8.363-8.407,8.385,8.385,0,0,0-8.408,8.363A8.385,8.385,0,0,0-3.23-98.721v-5.845H-5.371v-2.417H-3.23v-1.845a2.956,2.956,0,0,1,3.16-3.263,12.169,12.169,0,0,1,1.866.172v2.065H.742a1.226,1.226,0,0,0-1.371,1.06,1.279,1.279,0,0,0,0,.255v1.57H1.7l-.358,2.4H-.634v5.859a8.359,8.359,0,0,0,7.091-8.262Z" fill="#fff"/> </g> </g></svg>
        </FacebookShareButton>
      }
      <h2 className='caps'>Aitäh, et osalesid värskuse loosis!</h2>
    </div>
  );
}

export default RegSuccess;