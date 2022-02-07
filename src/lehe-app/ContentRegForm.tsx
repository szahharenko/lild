import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { postData, getOmnivaList } from '../tools/tools'

interface Props {
  onSuccess: Function,
  toggleRules: Function
}

export type UserSubmitForm = {
  email: string;
  delivery: string;
  phoneNumber: string;
  acceptTerms: boolean;
};

const API_URL = 'https://httpbin.org/post';

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

  const handleFormSubmit = (data: UserSubmitForm) => {
    postData(API_URL, data)
      .then((resp) => onSuccess(resp))
      .catch(() => alert('Midagi läks valesti :('))
  }

  return (
    <div className='result'>
      <h1>Palju õnne!</h1>
      <p><strong>Liitudes uudiskirjaga<br/>osaled kinkekoti loosis.</strong></p>
      <p>Vali sobiv automaat ja sisesta enda e-post<br/>ja telefoni number. Nii saame võidu korral<br/>auhinna sulle saata.</p>
      <form onSubmit={handleSubmit((data: UserSubmitForm) => handleFormSubmit(data))}>
        <div className='icon icon__email'>
          <input type="text" {...register('email')} className={`form-control ${errors.email ? 'is-invalid' : ''}`} placeholder='E-post' />
        </div>
        <div className='icon icon__arrow'>
          <select {...register('delivery')} className={`form-control ${errors.delivery ? 'is-invalid' : ''}`}>
            <option value=''>Pakiautomaat</option>
            { getOmnivaList().map( ([title, region, city], i) =>  <option key={i} value={title}>{`${city} - ${title}`}</option>) }
          </select>
        </div>
        <div className='icon icon__phone'>
          <input type="tel" {...register('phoneNumber')} className={`form-control ${errors.phoneNumber ? 'is-invalid' : ''}`} placeholder='Telefoni number' />
        </div>
        <label className='checkbox'>
          <span>
            Nõustun kampaania <a href="#n" onClick={rules} >tingimustega</a>
          </span>
          <input type={'checkbox'} {...register('acceptTerms')} className={`form-control ${errors.acceptTerms ? 'is-invalid' : ''}`} />
          <span></span>
        </label>
        <div className='form-submit'>
          <button>Osalen Loosimises</button>
        </div>
      </form>
    </div>
  );
}

export default RegForm;