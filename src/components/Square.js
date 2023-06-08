import React from 'react'

const Square = (props) => {
  return (
    <div>
        <div className="square" style={{border: "1px solid", height: '100px', width: '100px', display:'flex', justifyContent:'center',alignItems:'center'}} >
            <h4>{props.value}</h4>
        </div>
    </div>
  )
}

export default Square