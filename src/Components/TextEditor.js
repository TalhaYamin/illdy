import React, { useState } from "react";

const TextEditor = () => {
  // let id = 0;
  const [Text, setText] = useState("");
  const [Name, setName] = useState([]);

  const handleClick = () => {
    setText("");
    setName([...Name, Text]);
  };

  const handleSubmit = (e, ll) => {
    const filteredlist = Name.filter((abc) => {
      let reult = abc != ll;
      return reult;
    });
    console.log(filteredlist);
    setName(filteredlist);
  };

  return (
    <>
      <div>
        <input
          type="text"
          value={Text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={handleClick}>Submit</button>
      </div>
      <ul>
        
        {Name?.map((iterator) => (
          <>
          <li >{iterator}</li>
          <li><button onClick={(e) => handleSubmit(e, iterator)}>Delete</button></li>
          </>  
        ))}
        
      </ul>
    </>
  );
};

export default TextEditor;
