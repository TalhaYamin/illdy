import React, { useState } from 'react'
import DisplayMessage from './DisplayMessage'

// using props by destructuring.
const PersonalDetailsForm = (props) => {
//    console.log(name);
//    console.log(age); 
const [firstName, setFirstName]=useState()
const [lastName, setLastName]=useState()
const [age,setAge]=useState()

const handleOnclick=()=>{
}

// console.log('sadsadasd', displayMessage)
console.log('props', props)


  return (
    <div>
      {/* <h1>My Name is {name} and age is {age}</h1> */}
      <input type="text"  value={firstName} onChange={(e)=> setFirstName(e.target.value)}/>
      <input type="text" value={lastName} onChange={(e)=> setLastName(e.target.value)}/>
      <input type="number" value={age} onChange={(e)=> setAge(e.target.value)}/>
      <input type="submit" value="Submit" onClick={handleOnclick}/>

      <DisplayMessage/>

    {/* {displayMessage()} */}

    {/* {children} */}
    </div>
    
    
  )
}

export default PersonalDetailsForm
