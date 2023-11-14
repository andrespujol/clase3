import React, {useRef, useState} from 'react'

const Ejemplo2 = () => {
const [isZoomed, setIsZommed] = useState(false)

const productImageRef = useRef()
const myRef = useRef()

const handleClick = () => {
        
    myRef.current.style.backgroundColor= 'blue'
}
const handleClickImage = () => {
    if(isZoomed){
        productImageRef.current.style.transform = 'scale(1)'
    }else{
        productImageRef.current.style.transform = 'scale(2)'
    }
    setIsZommed(!isZoomed)
    console.log('cambia estado', isZoomed)
}

  return (
    <>
        <div>
        <div ref={myRef}> Este div va a ser el elemento referenciado</div>
        <button onClick={handleClick}>cambia de color</button>
    </div>
    <div>
        <img 
        ref={productImageRef}
        onClick={handleClickImage}
        src={'https://i.blogs.es/cfa26e/rickandmortycabecera/1366_2000.jpg'} alt="" />
    </div>
        </>
  )
}

export default Ejemplo2
