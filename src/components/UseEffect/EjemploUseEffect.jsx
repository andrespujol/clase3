import React, { useEffect, useState } from 'react'

const EjemploUseEffect = () => {
  const [data, setData ] = useState([])

  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=10')
    .then(res => res.json())
    .then((elem) => setData(elem.products));
  },[])
  console.log(data)
  return (
    <div>
      <h1>useEffect</h1>
      <div>{data.map((prod) =>
      <div key={prod.id}>
        <p>{prod.title}</p>
      </div>
      )}</div>
    </div>
  )
}

export default EjemploUseEffect
