import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { postData, getOmnivaList, GA } from '../tools/tools';
import { API, isRevealed } from '../models/models';
import { UserSubmitForm, UserFormResponse, RegisterErrors }  from '../models/models'
import { OmnivaLocation } from '../tools/data/omniva';

interface Props {
  onSuccess: Function,
  toggleRules: Function
}

const RegForm: React.FC<Props> = ({ onSuccess, toggleRules }) => {



  const validationSchema = Yup.object().shape({
    email: Yup.string().required('Email is required').email('Email is invalid'),
    phoneNumber: Yup.number().required('Phone is required'),
    delivery: Yup.string().required('Delivery is required'),
    acceptTerms: Yup.bool().oneOf([true], 'Accept Terms is required')
  });
  const rules = (e: React.MouseEvent) => {
    e.preventDefault();
    toggleRules();
  }
  const { register, handleSubmit, formState: { errors } } = useForm<UserSubmitForm>({
    resolver: yupResolver(validationSchema)
  });

  const handleError = (resp: UserFormResponse) => {
    if(resp.error === RegisterErrors.AlreadyExist) {
      alert('Oled juba selle telefon ega e-post registreerunud');
      return false;
    }
    alert('Midagi läks valesti :(')
  }

  const handleFormSubmit = (data: UserSubmitForm) => {
    GA('event', 'register_start');
    postData(API, {...data, ...{action: 'register'}})
      .then((resp: UserFormResponse) => {
        if(resp.status === 1) {
          GA('event', 'register_success');
          onSuccess(data);
        } else {
          GA('event', 'register_failed');
          handleError(resp);

        }
      })
      .catch(() => {
        handleError({status:0});
        GA('event', 'register_failed');
      })
  }

  let omnivaList : OmnivaLocation[] = [];

  const getLocationList = ( ) => {
    if(omnivaList.length === 0) omnivaList = getOmnivaList();
    return omnivaList;
  }

  return (
    <div className='result'>
      <h1>Palju õnne!</h1>
      { isRevealed ?
        <>
          <p><strong>Sisesta oma andmed, et liituda<br/>Lidli uudiskirjaga ja osaleda<br/> kinkekoti loosis.</strong></p>
          <p>Vali sobiv pakiautomaat ja sisesta enda<br/> e-posti aadress ja telefoninumber.</p>
          <p>Nii saame võidu korral sulle auhinna saata.</p>
        </>
        :
        <>
          <p><strong>Sisesta oma andmed, et liituda uudiskirjaga<br/> ja osaleda kinkekoti loosis.</strong></p>
          <p>Vali sobiv pakiautomaat ja sisesta enda e-posti<br/> aadress ja telefoninumber.</p>
          <p>Nii saame võidu korral sulle auhinna saata.</p>
        </>
      }
      <form onSubmit={handleSubmit((data: UserSubmitForm) => handleFormSubmit(data))} method="post">
        <div className='icon icon__email'>
          <input type="text" {...register('email')} className={`form-control ${errors.email ? 'is-invalid' : ''}`} placeholder='E-post' />
        </div>
        <div className='icon icon__arrow'>
          <select {...register('delivery')} className={`form-control ${errors.delivery ? 'is-invalid' : ''}`}>
            <option value=''>Pakiautomaat</option>
            { getLocationList().map( ([title, region, city], i) =>  <option key={i} value={title}>{`${city} - ${title}`}</option>) }
          </select>
        </div>
        <div className='icon icon__phone'>
          <input type="tel" {...register('phoneNumber')} className={`form-control ${errors.phoneNumber ? 'is-invalid' : ''}`} placeholder='Telefoninumber' />
        </div>
        <label className='checkbox'>
          <span>
            Nõustun kampaania <a href="#n" onClick={rules} >tingimustega</a>
          </span>
          <input type={'checkbox'} {...register('acceptTerms')} className={`form-control ${errors.acceptTerms ? 'is-invalid' : ''}`} />
          <span></span>
        </label>
        <div className='form-submit'>
          <button>OSALEN LOOSIMISES</button>
        </div>
      </form>
    </div>
  );
}

export default RegForm;