import React from 'react'
import './index.css'

export const EList = ({table,Eliminar}) => {
    return (
      <>
      <table className='table'>
        <thead>
        <tr>
            <th className="thTable">ID</th>
            <th className="thTable">Nombre</th>
            <th className="thTable">Cumpleanios</th>
            <th className="thTable">Direccion</th>
            <th className="thTable">Edad</th>
        </tr>
        </thead>
              {
                  table.map((data,key) => 
                  {
                    return(
                      
                  <tbody key={key}>
                    <tr>
                      <td>{key +1}</td>
                      <td>{data.nombre}</td>
                      <td>{data.cumpleanios}</td>
                      <td>{data.direccion}</td>
                      <th>{data.edad}</th> 
                      <th><button onClick={() => Eliminar(key)}>Eliminar</button></th>
                    </tr>
                  </tbody>
                  )
                    })}
          
      </table>
      </>
    );
}
