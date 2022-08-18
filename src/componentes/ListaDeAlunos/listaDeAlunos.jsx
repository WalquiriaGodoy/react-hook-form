import React from 'react';
import './listaDeAlunos.css';
import axios from 'axios';

export default function listaDeAlunos() {
  function getData() {
    axios
      .get('http://localhost:3000/Alunos')
      .then((response) => {
        console.log(response.data);
      })
      .catch(() => {
        console.log('Deu errado');
      });
  }

  return (
    <>
      <h2>Lista de Alunos</h2>
      <div className='container'>Dados do Aluno</div>
    </>
  );
}
