import { useEffect, useRef, useState } from "react"
import { reqResApi } from "../api/reqRes"
import { User, ReqResListado } from "../interfaces/reqRes"


export const useUsuarios = () => {
    const [usuarios, setUsuarios] = useState<User[]>([])

    const paginaRef = useRef(1)

    const getUsers = async () => {
       try {
           const res = await reqResApi.get<ReqResListado>('/users', {
                params: {
                    page: paginaRef.current
                }
           })
           setUsuarios(res.data.data)
           console.log(res.data.data)
       } catch (error) {
            console.log(error)
       }
    }

    const paginaAnterior = () => {
        if( paginaRef.current > 1) {
            paginaRef.current--
            getUsers()
        }    
    }

    const paginaSiguiente = () => {
        if (paginaRef.current < 2) {
            paginaRef.current++
            getUsers()
        } else {
            alert('No hay más registros')

        }
    }
    

    useEffect(() => {
      // llamado a la API
      getUsers();
    }, [])

    return {
        usuarios,
        // getUsers,
        paginaAnterior,
        paginaSiguiente,
    }
}