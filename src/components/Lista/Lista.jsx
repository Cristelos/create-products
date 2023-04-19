import { Modal } from '../Modal/Modal';
import './Lista.css'
import React, {  useState } from 'react'

export const Lista = () => {
    const [myArray, setMyArray] = useState([
        { id: 1, name: "Lápiz", cantidad: 20 },
        { id: 2, name: "Libreta", cantidad: 30 },
        { id: 3, name: "Goma de borrar", cantidad: 6 },
      ]);

    const [modal, setModal] = useState(false);
    const Toggle = () => setModal(!modal);
    

    const addProducto = () => {
        let name = prompt ('Añade un nombre');
        let cantidad = prompt ('Añade una cantidad');
        let id = Date.now()
        const copyArray = myArray.slice();
        copyArray.push({id: id,name: name, cantidad: cantidad})
        setMyArray(copyArray)
    }

    const editar = (listId) => {
        let name = prompt ('Añade un nombre');
        let cantidad = prompt ('Añade una cantidad');
        const copyArray = myArray.filter(list => list.id !== listId);
        let id = Date.now()
        copyArray.push({id:id, name: name, cantidad: cantidad})
        setMyArray(copyArray)
    }

    const eliminar = (listId) => {
        const newListFiltrar = myArray.filter(list => list.id !== listId);
        setMyArray(newListFiltrar)
    }

  return (
    <div className='lista-productos'>
        {myArray.map((list,index) => 
        <div key={index} className='productos'>

            <div className='cajita'>
            <div className='iconos'>
                <img src='./assets/pen29.png' alt={list.id} onClick={(e) => editar(list.id)} className='icon'/>
                <img src='./assets/delete30.png' alt={list.id} onClick={() => eliminar(list.id)} className='icon' />
            </div>
            <h3 className='nombre-producto'>{list.name}</h3>
            <p>Cantidad: {list.cantidad}</p>
            </div>
            
           
            <div>
            <button className='boton clickme' onClick={() => Toggle()}>Comentar</button>
            <Modal show={modal} close={Toggle}/>
            </div>
            
        </div>

        )}
        <div className='add-productos' onClick={addProducto}>
            <img src='./assets/add30.png' alt='añadir' className='add-img'/>
        </div>
    </div>
  )
}
