import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { postData } from '../tools/tools'

interface Props {
  onSuccess: Function
}

export type UserSubmitForm = {
  email: string;
  delivery: string;
  phoneNumber: string;
  acceptTerms: boolean;
};

const API_URL = 'https://httpbin.org/post';

const RegForm: React.FC<Props> = ({ onSuccess }) => {

  const validationSchema = Yup.object().shape({
    email: Yup.string().required('Email is required').email('Email is invalid'),
    phoneNumber: Yup.number().required('Phone is required'),    
    delivery: Yup.string().required('Delivery is required'),
    acceptTerms: Yup.bool().oneOf([true], 'Accept Terms is required')
  });

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
        <div>
          <input type="text" {...register('email')} className={`form-control ${errors.email ? 'is-invalid' : ''}`} placeholder='E-post' />        
        </div>
        <div>        
          <select {...register('delivery')} className={`form-control ${errors.delivery ? 'is-invalid' : ''}`}>
            <option value=''>Pakiautomaat</option>
            <option value='A'>Koht A</option>
            <option value='B'>Koht B</option>
          </select>
        </div>        
        <div>        
          <input type="tel" {...register('phoneNumber')} className={`form-control ${errors.phoneNumber ? 'is-invalid' : ''}`} placeholder='Telefoni number' />                        
        </div>        
        <label className='checkbox'>
          Nõustun kampaania tingimustega:
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