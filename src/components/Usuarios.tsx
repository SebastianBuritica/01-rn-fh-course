// import React, { useEffect, useRef, useState } from 'react'
// import { reqResApi } from '../api/reqRes'
import { useUsuarios } from '../hooks/useUsuarios'
import {  User } from '../interfaces/reqRes'

const Usuarios = () => {
    
    const {usuarios, paginaAnterior, paginaSiguiente} = useUsuarios()
    
    const renderItem = (usuario: User) => {
        return (
            <tr key={usuario.id.toString()}>
                <td>
                <img 
                    src={usuario.avatar}
                    alt={usuario.last_name}
                    style={{
                        width: 35,
                        borderRadius: 100
                    }} 
                />  
                </td>
                <td>{usuario.first_name}</td>
                <td>{usuario.email}</td>
            </tr>
        )
    }


return (
    <>
    <h3>Usuarios: </h3>

        <table className='table'>
            <thead>
                <tr>
                    <th>Avatar</th>
                    <th>Nombre</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {
                    usuarios.map( renderItem )
                }
            </tbody>
        </table>

        <button
            className='btn btn-primary'
            onClick={paginaAnterior}
        >
            Anteriores
        </button>
        &nbsp;
        <button
            className='btn btn-primary'
            onClick={paginaSiguiente}
        >
            Siguientes
        </button>

    </>
  )
}

export default Usuarios