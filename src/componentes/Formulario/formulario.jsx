import React from 'react';
import './formulario.css';
import { useForm } from 'react-hook-form';

export default function Formulario() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  function printData(data) {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(printData)}>
      <label>
        Nome
        <input {...register('fullName')} />
      </label>

      <label>
        Email
        <input {...register('email')} />
      </label>

      <label>
        Cep
        <input {...register('cep')} />
      </label>

      <label>
        Endereço
        <input {...register('endereco')} />
      </label>

      <button>Cadastrar</button>
    </form>
  );
}
