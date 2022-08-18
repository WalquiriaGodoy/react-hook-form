import React from 'react';
import './formulario.css';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import axios from 'axios';

export default function Formulario() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log({ errors });

  function pushData(data) {
    axios
      .post('http://localhost:3000/Alunos', data)
      .then(() => {
        console.log('Deu tudo certo');
      })
      .catch(() => {
        console.log('Deu errado');
      });
  }

  return (
    <form onSubmit={handleSubmit(pushData)}>
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
