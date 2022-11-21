import React, { useState , useEffect} from 'react'

function Form(props) {

    const [name,setName] = useState(['talha']);

    const handleClick = ()=>{
        console.log(name);
        setName('haroon');
    }
     useEffect(() =>{
      console.log('useeffect rendered')
      console.log(name)
      
    }, [name])
  return (
    <div>
      <button onClick={handleClick}>{props.buttonName}</button>
      <p>This is my {name}</p>
    </div>
  )
}

export default Form;
