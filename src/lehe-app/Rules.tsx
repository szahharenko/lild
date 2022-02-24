import React from 'react';
import { isRevealed } from '../models/models';

interface Props {
  rulesToggle: Function
}

const Rules: React.FC<Props> = ({ rulesToggle }) => {
  return (
    <div className='rules-container'>
      <span className="close-button" onClick={ () => rulesToggle() }>×</span>
      <h1>KAMPAANIA TINGIMUSED</h1>
      { isRevealed ?
        <div className='rules-overflow'>
          <h2>ÜLDTINGIMUSED</h2>
          <p>Ajavahemikul 24.02.22–06.03.22 toimuvat kampaaniat korraldab Lidl Eesti OÜ (edaspidi Korraldaja), registrikoodiga 14131773, asukohaga A. H. Tammsaare tee 47, Kristiine linnaosa, 11316 Tallinn, Harju maakond, Eesti.</p>
          <p>Tingimustega kehtestatakse kampaania reeglid. Korraldaja otsused kampaania läbiviimisel on lõplikud ja kõigile kampaanias osalejatele kohustuslikud. Kõik kampaaniast tulenevad vaidlused lahendatakse Eesti Vabariigis kehtivate seaduste järgi.</p>
          <p>Kampaanias ei ole lubatud osaleda Imagine AD OÜ, Lidl Eesti OÜ ning kampaania läbiviimisega seotud muude firmade töötajatel ning nende pereliikmetel.</p>

          <h2>KAMPAANIAS OSALEMINE JA AUHINNAD</h2>
          <p>Kampaanias osalemiseks tuleb mängida kampaanialehel värskeltsaabumas.ee mängu ja liituda uudiskirjaga.</p>
          <p>Kampaanias osalemine on tasuta. Kampaanias osalevad kõik uudiskirjaga liitujad.</p>
          <p>Iga e-posti aadress saab osaleda loosil ühe korra. Osaleja saab enda võiduvõimalust suurendada ühe lisahäälega, jagades mängu Facebook platvormil.</p>
          <p>Kõikide uudiskirjaga liitunute vahel loositakse välja 2500 Lidli poekotti koos kataloogi, šokolaadi ja kaardiga.</p>
          <p>Auhinnad loositakse välja kõigi uudiskirjaga liitunute vahel. Loosimiseks kasutatakse digitaalset algoritmi, mis valib võitjad välja juhuslikult.</p>
          <p>Võitjatele auhindade üleandmisega seotud riiklikud maksud tasub korraldaja Eesti Vabariigi seadustes sätestatud korras ja tähtaegadel.</p>
          <p>Kampaania auhindu ei asendata teist liiki auhindadega ega maksta välja rahas.</p>
          <p>Korraldaja jätab omale õiguse muuta kampaania reegleid ning anda välja lisaauhindu.</p>

          <h2>OSALEMISÕIGUS</h2>
          <p>Auhind loositakse välja nende vahel, kes on kampaania jooksul ehk 24.02.22–06.03.22 liitunud Lidl uudiskirjaga.</p>
          <p>Kampaanias osalemiseks vajaliku teabe esitamise viimane kuupäev on 06.03.22.</p>
          <p>Kampaanias osaleja kinnitab Korraldajale enda kohta esitatud andmete õigsust, vastavust Korraldaja kehtestatud reeglitele, soovi osaleda kampaanias ja nõustumist kõigi Korraldaja kehtestatud kampaaniatingimustega. Alaealise osaleja puhul loetakse osalemine kinnitatuks, kui osalejal on olemas seadusliku esindaja või eestkostja nõusolek kampaanias osalemiseks ning see isik kinnitab kampaania reeglitega tutvumist ja nendega nõustumist.</p>

          <h2>VÕITJAD</h2>
          <p>Võitjaga võetakse ühendust sisestatud kontaktandmete kaudu ning auhind tarnitakse osaleja poolt välja valitud pakiautomaati.</p>

          <h2>ISIKUANDMETE KAITSE</h2>
          <p>Kampaanias osaleja annab Korraldajale nõusoleku kampaania läbiviimise eesmärgil kasutada ja edastada Lidl Eesti OÜ-le töötlemiseks oma isikuandmeid, sh uudiskirjade saatmiseks, kampaania võitja nime avaldamiseks Lidli kampaanialehel ja Lidl Eesti sotsiaalmeediakanalites, samuti oma isikuandmete säilitamiseks kuue kuu jooksul pärast kampaania lõppu võimalike vaidluste lahendamiseks.</p>
          <p>Kampaanias osaleja poolt edastatud isikuandmeid ei kasutata muul eesmärgil, kui käesolevates tingimustes on välja toodud.</p>

          <h2>LISATEAVE</h2>
          <p>Kampaania kohta saab lisateavet küsida ja tekkinud pretensioone esitada e-posti aadressil klienditugi@lidl.ee. Pretensioonidele vastame 30 kalendripäeva jooksul ja pretensioone saab esitada kuni 30.03.2022.</p>
          <p>Vääramatu jõu (force majeure) asjaolude ilmnemisel on Korraldajal ühepoolne õigus katkestada kampaania ja jätta auhinnad välja loosimata ja/või auhinnad võitjatele üle andmata, teatades sellest kohe meedia vahendusel.</p>
          <p>Korraldajal on õigus jätta auhind välja andmata, kui võitjaga ei ole võimalik ühendust saada 5 (viie) tööpäeva jooksul pärast loosimist või kui võitja ei pöördu auhinna võitmise fikseerimiseks Korraldaja poole e-posti aadressil klienditugi@lidl.ee hiljemalt 30.03.2022.</p>
        </div>
        :
        <div className='rules-overflow'>
          <h2>ÜLDTINGIMUSED</h2>
          <p>Ajavahemikul 24.02.22–06.03.22 toimuvat kampaaniat korraldab Imagine AD OÜ (edaspidi Korraldaja), registrikoodiga 10885979, asukohaga Tartu mnt 63, Kesklinna linnaosa, 10115 Tallinn, Harju maakond, Eesti.</p>
          <p>Tingimustega kehtestatakse kampaania reeglid. Korraldaja otsused kampaania läbiviimisel on lõplikud ja kõigile kampaanias osalejatele kohustuslikud. Kõik kampaaniast tulenevad vaidlused lahendatakse Eesti Vabariigis kehtivate seaduste järgi.</p>
          <p>Kampaanias ei ole lubatud osaleda Imagine AD OÜ ning kampaania läbiviimisega seotud muude firmade töötajatel ning nende pereliikmetel.</p>
          <h2>KAMPAANIAS OSALEMINE JA AUHINNAD</h2>
          <p>Kampaanias osalemiseks tuleb mängida kampaanialehel värskeltsaabumas.ee mängu ja liituda uudiskirjaga.</p>
          <p>Kampaanias osalemine on tasuta. Kampaanias osalevad kõik uudiskirjaga liitujad.</p>
          <p>Iga e-posti aadress saab osaleda loosil ühe korra. Osaleja saab enda võiduvõimalust suurendada ühe lisahäälega, jagades mängu Facebook platvormil.</p>
          <p>Kõikide uudiskirjaga liitunute vahel loositakse välja 2500 poekotti koos kataloogi, šokolaadi ja kaardiga.</p>
          <p>Auhind loositakse välja kõigi uudiskirjaga liitunute vahel. Loosimiseks kasutatakse digitaalset algoritmi, mis valib võitjad välja juhuslikult.</p>
          <p>Võitjatele auhindade üleandmisega seotud riiklikud maksud tasub korraldaja Eesti Vabariigi seadustes sätestatud korras ja tähtaegadel.</p>
          <p>Kampaania auhindu ei asendata teist liiki auhindadega ega maksta välja rahas.</p>
          <p>Korraldaja jätab omale õiguse muuta kampaania reegleid ning anda välja lisaauhindu.</p>


          <h2>OSALEMISÕIGUS</h2>
          <p>Auhind loositakse välja nende vahel, kes on kampaania jooksul ehk 24.02.22–06.03.22 liitunud uudiskirjaga.</p>
          <p>Kampaanias osalemiseks vajaliku teabe esitamise viimane kuupäev on 06.03.22.</p>
          <p>Kampaanias osaleja kinnitab Korraldajale enda kohta esitatud andmete õigsust, vastavust Korraldaja kehtestatud reeglitele, soovi osaleda kampaanias ja nõustumist kõigi Korraldaja kehtestatud kampaaniatingimustega. Alaealise osaleja puhul loetakse osalemine kinnitatuks, kui osalejal on olemas seadusliku esindaja või eestkostja nõusolek kampaanias osalemiseks ning see isik kinnitab kampaania reeglitega tutvumist ja nendega nõustumist.</p>

          <h2>VÕITJAD</h2>
          <p>Võitjaga võetakse ühendust sisestatud kontaktandmete kaudu ning auhind tarnitakse osaleja poolt välja valitud pakiautomaati.</p>

          <h2>ISIKUANDMETE KAITSE</h2>
          <p>Kampaanias osaleja annab Korraldajale nõusoleku kampaania läbiviimise eesmärgil kasutada ja edastada Imagine AD OÜ-le töötlemiseks oma isikuandmeid, sh uudiskirjade saatmiseks, kampaania võitja nime avaldamiseks kampaanialehel ja hiljem sotsiaalmeediakanalites, samuti oma isikuandmete säilitamiseks kuue kuu jooksul pärast kampaania lõppu võimalike vaidluste lahendamiseks.</p>
          <p>Kampaanias osaleja poolt edastatud isikuandmeid ei kasutata muul eesmärgil, kui käesolevates tingimustes on välja toodud.</p>

          <h2>LISATEAVE</h2>
          <p>Kampaania kohta saab lisateavet küsida ja tekkinud pretensioone esitada e-posti aadressil imagine@imagine.ee. Pretensioonidele vastame 30 kalendripäeva jooksul ja pretensioone saab esitada kuni 30.03.2022.</p>
          <p>Vääramatu jõu (force majeure) asjaolude ilmnemisel on Korraldajal ühepoolne õigus katkestada kampaania ja jätta auhinnad välja loosimata ja/või auhinnad võitjatele üle andmata, teatades sellest kohe meedia vahendusel.</p>
          <p>Korraldajal on õigus jätta auhind välja andmata, kui võitjaga ei ole võimalik ühendust saada 5 (viie) tööpäeva jooksul pärast loosimist või kui võitja ei pöördu auhinna võitmise fikseerimiseks Korraldaja poole e-posti aadressil imagine@imagine.ee hiljemalt 30.03.2022.</p>
        </div>
      }
    </div>
  );
}

export default Rules;