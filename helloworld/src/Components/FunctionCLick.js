import React from 'react'

function FunctionCLick() {
    function clickHandler(){
        console.log('Button clicked')
    }
  return (
    <button onClick={clickHandler}>Clickme</button>
  )
}

export default FunctionCLick