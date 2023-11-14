import React, { useState, useEffect } from 'react'

const EjemploPromesa = () => {
    const [ data, setData ] = useState([])
    const [ isLoading, setIsLoading] = useState(true)

    const productos = [
        {id: 1, nombre: 'Remera'},
        {id: 2, nombre: 'Buzo'}
    ]
    console.log(isLoading)
    const getProducts = () => {
        return new Promise((resolve, reject) => {
            setTimeout(()=> {
            resolve(productos)
        }, 2000)
        })
    }
    useEffect(() => {
        getProducts()
            .then((elem) => {
                setData(elem)
            })
            .catch((err) => {
                console.log(err)
                setData(err)
            })
            .finally(() =>  setIsLoading(false))
    }, [])

  return (
    <div>
        {isLoading ? <p>Cargando...</p> : 
            <div>
                {data.map((el) => <p>{el.nombre}</p>)}
            </div>
        }

    </div>
  )
}

export default EjemploPromesa
