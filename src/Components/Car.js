import React, {useState} from 'react'

const Car = () => {

    const[CarBody, setCarBody] = useState({
        color: "red",
        brand: "Honda",
        make: "civic"
    })

    const handleOnClick = () =>{
    console.log({...CarBody})
        setCarBody({ ...CarBody , color:"blue" })
    }
  return (
    <div>
        <h1>This is {CarBody.brand}</h1>
        <p>Make name is {CarBody.make} and color is {CarBody.color}</p>
        {/* <button onClick = {() => setCarBody({brand:CarBody.brand, make:CarBody.make, color:"blue"})}>Change Color</button> */}
        <button onClick={handleOnClick}>Blue</button>
    </div>
  )
}

export default Car
