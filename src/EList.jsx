import React from 'react'
import './index.css'

export const EList = ({table,Eliminar}) => {
    return (
      <>
          <ul>
              {
                  table.map((data,key) => (
                    <li key={key}>
                        {key + "      "}
                        {data.nombre + "      "}
                        {data.cumpleanios + "      "}
                        {data.direccion + "      "}
                        {data.edad + "      "}
                        <button onClick={() => Eliminar(key)}>Eliminar</button>
                        <br />
                    </li>
                  ))}
          </ul>
      </>
    );
}
