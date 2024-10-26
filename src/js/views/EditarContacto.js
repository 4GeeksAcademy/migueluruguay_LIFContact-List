import React, {useContext}from 'react'
import { useParams } from 'react-router-dom';
import { Context } from '../store/appContext';
import { useNavigate } from "react-router-dom";



const EditarContacto = () => {
  //logica
  const {store, actions}= useContext(Context)
  const navigate = useNavigate()
  const params = useParams();
  console.log(params);

  const handleEditContact = (e) => {
    e.preventDefault();
    actions.editContact(store.contact, navigate, params.contactId);
  };

  return (
    <div className='container border border-warning'>
            <h1>Este es mi componente Editar Contacto</h1>
            <div className="mb-3">
        <label htmlFor="formGroupExampleInput" className="form-label">Name</label>
        <input 
        type="text" 
        className="form-control" 
        id="formGroupExampleInput" 
        placeholder="Full Name" 
        name="full_name" 
        value={store.contact.name} 
        onChange={(e) => actions.updateContactField("name", e.target.value)} />
        <label htmlFor="exampleFormControlInput" className="form-label">Email address</label>
        <input type="email" 
        className="form-control" 
        id="exampleFormControlInput" 
        placeholder= "name@example.com" 
        name="email" 
        value={store.contact.email} 
       onChange={(e)=> actions.updateContactField("email", e.target.value)}/>

        <label htmlFor="formGroupExampleInput" className="form-label">Phone</label>
        <input 
        type="text" 
        className="form-control" 
        id="formGroupExampleInput" 
        placeholder="Enter phone" 
        name="phone" 
        value={store.contact.phone} 
       onChange={(e)=> actions.updateContactField("phone", e.target.value)} />
        <label htmlFor="formGroupExampleInput" className="form-label">Address</label>
        <input 
        type="text" 
        className="form-control" 
        id="formGroupExampleInput" 
        placeholder="Enter address" 
        name="address" value={store.contact.address} 
      onChange={(e)=> actions.updateContactField("address", e.target.value)} />
      </div>
      <p> Este es el id del nuev contacto: {params.contactId} </p>
      <button className='btn btn-primary' onClick={handleEditContact}
        /*Hace un post con la información del contacto*/
        //Para que me envíe al componente home, No puedo susar Link, porque me cancel Onclick
        //El navigate para este caso debería usarse en el primero o segundo .then ()

      >Editar</button>

    </div>
  )
}

export default EditarContacto;
