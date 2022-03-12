import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { postData } from '../tools/tools';
import { UserSubmitForm }  from '../models/models'

interface Props {
  toggleRules: Function
}

const SubscribeForm: React.FC<Props> = ({ toggleRules }) => {

  const [isSubscribed, setSubscribed] = useState<Boolean>(false);

  const validationSchema = Yup.object().shape({
    email: Yup.string().required('Email is required').email('Email is invalid'),
    acceptTerms: Yup.bool().oneOf([true], 'Accept Terms is required')
  });

  const rules = (e: React.MouseEvent) => {
    e.preventDefault();
    toggleRules();
  }

  const { register, handleSubmit, formState: { errors } } = useForm<UserSubmitForm>({
    resolver: yupResolver(validationSchema)
  });

  const handleFormSubmit = (data: UserSubmitForm) => {
    const email = data.email;
    const subscribeApi = `https://ats.ccmp.eu/ats/post.aspx?cr=1084&fm=19&s_email=${email}&s_origin=prelive_campaign`;
    postData(subscribeApi).finally(() => setSubscribed(true));
  }

  return (
    <div className='result'>
      { isSubscribed ?
        <>
          <h1>OLED LIITUNUD<br/> LIDL UDISKIRJAGA!</h1>
          <p>Hoia silm peal ka meie Instagrami ja Facebooki kontodel,<br/>et saaksid osaleda meie tulevastes kampaaniamängudes<br/>ja kõigis muudes tegemistes.</p>
          <div className='social-icons'>
            <a href="https://www.facebook.com/lidleesti">
              <svg xmlns="http://www.w3.org/2000/svg" width="26.807" height="26.807" viewBox="0 0 26.807 26.807"><path id="Path_7398" data-name="Path 7398" d="M163.206,450.691H141.271a2.435,2.435,0,0,0-2.436,2.436v21.935a2.435,2.435,0,0,0,2.436,2.436h12.184V466.531H149.8v-3.656h3.652v-1.964c0-3.716,1.813-5.348,4.9-5.348a17.33,17.33,0,0,1,2.632.162v3.494h-2.107c-1.311,0-1.771.691-1.771,2.1v1.56h3.845l-.521,3.656H157.11V477.5h6.1a2.437,2.437,0,0,0,2.436-2.436V453.127A2.437,2.437,0,0,0,163.206,450.691Z" transform="translate(-138.835 -450.691)" fill="#135398"/></svg>
              Lidl Eesti
            </a>
            <a href='https://www.instagram.com/lidleesti/'>
              <svg id="Group_4043" data-name="Group 4043" xmlns="http://www.w3.org/2000/svg" width="26.781" height="26.781" viewBox="0 0 26.781 26.781"><path id="Path_1" data-name="Path 1" d="M240.6,466.749a7.21,7.21,0,1,1,7.21-7.21A7.217,7.217,0,0,1,240.6,466.749Zm0-12.36a5.15,5.15,0,1,0,5.15,5.15A5.154,5.154,0,0,0,240.6,454.389Z" transform="translate(-227.205 -446.149)" fill="#e20064"/><circle id="Ellipse_1" data-name="Ellipse 1" cx="1.545" cy="1.545" r="1.545" transform="translate(19.569 4.119)" fill="#e20064"/><path id="Path_2" data-name="Path 2" d="M251.318,477.472h-12.36a7.217,7.217,0,0,1-7.21-7.21V457.9a7.217,7.217,0,0,1,7.21-7.21h12.36a7.219,7.219,0,0,1,7.21,7.21v12.36A7.22,7.22,0,0,1,251.318,477.472Zm-12.36-24.721a5.154,5.154,0,0,0-5.15,5.15v12.36a5.154,5.154,0,0,0,5.15,5.15h12.36a5.157,5.157,0,0,0,5.15-5.15V457.9a5.157,5.157,0,0,0-5.15-5.15Z" transform="translate(-231.747 -450.691)" fill="#e20064"/></svg>
              @lidleesti
            </a>
          </div>
        </>
        :
        <>
          <h1>LIITU LIDLI<br/> UUDISKIRJAGA!</h1>
          <p>Värskuse kampaania on selleks korraks lõppenud<br/> ja auhinnad on võitjate poole teel.</p>
          <p>Siiski tasub ka praegu liituda Lidli uudiskirjaga.</p>
          <p>Sisesta oma e-posti aadress, et saada värskeid ideid<br/> ja inspiratsiooni kokkamiseks ja kodu korrashoiuks!</p>

          <form onSubmit={handleSubmit((data: UserSubmitForm) => handleFormSubmit(data))} method="post">
            <div className='icon icon__email'>
              <input type="text" {...register('email')} className={`form-control ${errors.email ? 'is-invalid' : ''}`} placeholder='E-post' />
            </div>
            <label className='checkbox'>
              <span>
                Nõustun <a href="#n" onClick={rules} >tingimustega</a>
              </span>
              <input type={'checkbox'} {...register('acceptTerms')} className={`form-control ${errors.acceptTerms ? 'is-invalid' : ''}`} />
              <span></span>
            </label>
            <div className='form-submit'>
              <button>LIITUN UUDISKIRJAGA</button>
            </div>
          </form>
        </>
      }

    </div>
  );
}

export default SubscribeForm;