import React from 'react';
import './formulario.css';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

export default function Formulario() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log({ errors });

  function printData(data) {
    console.log(data, ' -----');
  }

  return (
    <form onSubmit={handleSubmit(printData)}>
      <label>
        Nome
        <input
          {...register('fullName', { required: 'O nome é obrigatório' })}
        />
        <ErrorMessage
          errors={errors}
          name='fullName'
          render={({ message }) => <span>{message}</span>}
        />
      </label>

      <label>
        Email
        <input {...register('e-mail')} />
      </label>

      <label>
        Cep
        <input {...register('cep')} />
      </label>

      <label>
        Endereço
        <input {...register('endereco')} />
      </label>

      <button type='submit'>Cadastrar</button>
    </form>
  );
}
