import {useState} from 'react'

export const useCounter = () => {
  
    const [valor, setValor] = useState<number>(0)

    const add = (p: number) => {
        setValor(valor + p)
      }
    
    const sub = (p: number) => {
        setValor(valor - p)
      }

    return {
        valor,
        add,
        sub
    }

}

