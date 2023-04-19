import './From.scss'
import React, { useState } from 'react'

export const From = () => {

    const firstComent = "Comentario de prueba del proveedor"

    const [coment, setComent] = useState([firstComent])
    const [newComent, setNewComent] = useState([""])

    const handelInputChange = (e) => {
        setNewComent(e.target.value)
    }

    const addNew = () => {
        const copyComent = [...coment];
        copyComent.push(newComent);
        setComent(copyComent);
    }    
    

  return (
    <div className='formulario'>
        {coment.map((list, index) =>
        <div key={index}>
            <p>{list}</p>
        </div>
        )}
      <input type="text" name="tarea" value={newComent} onChange={handelInputChange} className='formulario__input'/>
      <button onClick={addNew} className='formulario__boton'>Añadir</button>
    </div>
  )
}
