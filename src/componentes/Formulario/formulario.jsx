import React from 'react';
import './formulario.css';

export default function Formulario() {
  /*const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
*/
  return (
    <form>
      <label>
        Nome
        <input />
      </label>

      <label>
        Email
        <input />
      </label>

      <label>
        Cep
        <input />
      </label>

      <label>
        Endereço
        <input />
      </label>

      <button>Cadastrar</button>
    </form>
  );
}
