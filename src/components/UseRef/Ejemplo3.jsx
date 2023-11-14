import React, {useRef, useEffect} from 'react'

const Ejemplo3 = () => {

    const myRefInput = useRef()

    useEffect(() => {
        myRefInput.current.focus()
    },[])

  return (
    <div>
        <div>

        <label>Usuario</label>
        <input
            />
        </div>
        <div>
            <label htmlFor="">Contraseña</label>
            <input
            
            ref={myRefInput}
            />
        </div>

    </div>
  )
}

export default Ejemplo3
