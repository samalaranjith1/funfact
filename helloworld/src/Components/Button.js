import React from 'react'
import {useState} from 'react';

function Button() {
    const [input,setInput]=useState("ranji");

    

  return (
    <div>
        <form>
            <label>FirstName</label>
            <input type="text"
             name="firstName"
             value={input}></input>
             <br />
             <button onClick={setInput}>Clickme</button>             
        </form>
    </div>
  )
}

export default Button