import { useState } from 'react'
import { EForm } from './EForm';
import { EList } from './EList';

function App() {
  const [table, setTable] = useState([]);

  const Agregar = (data) => {
    setTable([...table, data]);
  };

  
  const Eliminar = (key) => {
    const Actualizar = table.filter((_, i) => i !== key);
    setTable(Actualizar);
  };

  return (
    <>
    <div className='container'>
      <div className="contain">
        <h1 className='h1_title'>Usuarios</h1>
        <EForm Agregar={Agregar} />
        <EList table={table} Eliminar={Eliminar} />
      </div>
    </div>
    </>
  )
}

export default App
