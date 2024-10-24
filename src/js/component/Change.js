import React, {useContext} from 'react'
import { Context } from '../store/appContext'

const Change = () => {
    const { store, actions } = useContext(Context)

  return (
    <div className='container m-5 border border-danger'>
      <h1>Componente Change</h1>
      <button className ='btn btn-danger' onClick = {() =>{
        actions.changeInfo( "Me encanta flux!" )
      }}> 
      Cambia info!
       </button>
    </div>
  )
}

export default Change
