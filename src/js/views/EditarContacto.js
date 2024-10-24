import React from 'react'
import { useParams } from 'react-router-dom';

const EditarContacto = () => {
  //logica
  const params = useParams();
  console.log(params);
  return (
    <div className='container border border-warning'>
      <h1>Este es mi componente Editar Contacto</h1>
      <p> Este es el id del nuev contacto: {params.contactId} </p>

    </div>
  )
}

export default EditarContacto;
