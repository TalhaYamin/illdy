import React from 'react'

function ItemSlider() {
    const mystyle={
        height:"2000px",
        width:"100%",
        backgroundColor:"blue",
        display:"flex",
        padding:"20px",
        position:"relative"
    }

  return (
    <div style={mystyle}>
        <h1>This is Main Div</h1>
      <div className="container-sm" >
        <h1>This is Inner Div</h1>
      </div>
    </div>
  )
}

export default ItemSlider
