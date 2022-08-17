import React from 'react';
import './formulario.css';

class Formulario extends React.Component {
  constructor() {
    super();
  }

  render() {
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
      </form>
    );
  }
}

export default Formulario;
