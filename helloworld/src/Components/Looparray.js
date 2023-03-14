import React from 'react'

function Looparray() {
    const arr=[1,2,3,4,5,6];
    const arrElements=arr.map((item)=>{return item*2 + ", "});

  return (
    <div>{arrElements}</div>
  )
}

export default Looparray