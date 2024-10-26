import React, { useContext } from 'react'
import { Context } from '../store/appContext';
import { useNavigate } from "react-router-dom";



const NuevoContact = () => {
  //logica
  const {store, actions}= useContext(Context)
  const navigate = useNavigate()

  const handleCreateContact = (e) => {
    e.preventDefault();
    actions.addContact(store.contact, navigate);
  };
  return (

    <div className=" container border border-success">
      <h2 className='title text-center'> Add a new contact</h2>

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
      <div class="d-grid gap-2 p-1">
      <button className='btn btn-primary' onClick={handleCreateContact}
        /*Hace un post con la información del contacto*/
        //Para que me envíe al componente home, No puedo susar Link, porque me cancel Onclick
        //El navigate para este caso debería usarse en el primero o segundo .then ()

      >Crear Contacto</button>
      </div>
    </div>

  );
};

export default NuevoContact
