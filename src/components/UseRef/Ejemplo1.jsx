import React, {useRef} from 'react'

const Ejemplo1 = () => {

    const myRef = useRef()


    const handleClick = () => {
        
        myRef.current.style.backgroundColor= 'blue'
    }
  return (
    <div>
        <div ref={myRef}> Este div va a ser el elemento referenciado</div>
        <button onClick={handleClick}>cambia de color</button>
    </div>
  )
}

export default Ejemplo1
