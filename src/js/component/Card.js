import React, { useContext } from 'react'
import { Context } from "../store/appContext"
import { Link } from 'react-router-dom'

const Card = () => {
  //logica de JS
  const { store, actions } = useContext(Context)
  return (
    <div className="container m-3 border border-primary">

      {store.contacts.map((value) => {
        return (
          <div className='card m-3' key={value.id}>
            <div className="card-body row">
              <div className='col-2 text-start'>

                <img src="https://picsum.photos/id/237/150/150" class="rounded-circle" alt='Foto Contacto' cl />
              </div>
              <div className='col-9 text-start p-4'>
                <p>{value.name}</p>
                <p> <i className="fa-solid fa-envelope pe-1"></i> {value.email} </p>
                <p> <i className="fa-solid fa-square-phone pe-1"></i>
                  {value.phone} </p>
                <p> <i className="fa-solid fa-location-dot pe-1"></i>
                  {value.address} </p>
              </div>
              <div className="col-1 d-flex align-items-end">
                <Link to={`/editar-contacto/${value.id}`}> <i className="fa-solid fa-pen-to-square" style={{ cursor: "pointer" }}></i> </Link>
                <i className="fa-solid fa-trash ms-4" style={{ cursor: "pointer", color: "red" }}
                  onClick={() => {
                    if (window.confirm(" ¿Seguro queres borrar este contacto?")) {
                      actions.deleteContact(value.id);
                    }
                  }
                  }>

                </i>
              </div>

            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Card
