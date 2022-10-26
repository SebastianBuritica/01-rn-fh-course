import React from 'react'
import {useCounter} from '../hooks/useCounter'

const ContadorHook = () => {
 
  const { valor, add, sub } = useCounter()   

    return (
    <>
    <h3>Contador w hook <small>{valor}</small> </h3>

    <button 
        className='btn btn-primary'
        onClick={() => add(1)}
    >+1</button>
    &nbsp;
    <button 
        className='btn btn-primary'
        onClick={() => sub(1)}
        >-1</button>
    </>
  )
}

export default ContadorHook