import React, {useState} from 'react'

const Contador = () => {
  const [valor, setValor] = useState<number>(0)

const add = (p: number) => {
    setValor(valor + 1)
  }

const sub = (p: number) => {
    setValor(valor - 1)
  }
    

    return (
    <>
    <h3>Contador <small>{valor}</small> </h3>

    <button 
        className='btn btn-primary'
        onClick={() => add(1)}
    >+1</button>
    &nbsp;
    <button 
        className='btn btn-primary'
        onClick={() => sub(-1)}
        >-1</button>
    </>
  )
}

export default Contador