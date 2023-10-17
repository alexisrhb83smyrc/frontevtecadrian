import React, { useState } from 'react'
import './index.css'

export const EForm = ({Agregar}) => {
const [nombre, setNombre] = useState('');
const [cumpleanios, setCumpleanios] = useState('');
const [direccion, setDireccion] = useState('');
const [edad, setEdad] = useState('');

const handleSubmit = (e) => {
        e.preventDefault();
        if(nombre.trim() === '') return;
        Agregar({nombre,cumpleanios,direccion,edad});
        setNombre('');
        setCumpleanios('');
        setDireccion('');
        setEdad('');
    };
  return (
        <form className='UserForm' onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder='Nombre'
                required
            />
            <input 
                type="date" 
                value={cumpleanios}
                onChange={(e) => setCumpleanios(e.target.value)}
                placeholder='Fecha de Nacimiento'
                required
            />
            <input 
                type="text" 
                value={direccion}
                onChange={(e) => setDireccion(e.target.value)}
                placeholder='Direccion'
                required
            />
            <input 
                type="text" 
                value={edad}
                onChange={(e) => setEdad(e.target.value)}
                placeholder='Edad'
                required
            />
            <button type='Submit'>Nuevo</button>
        </form>
  );
}