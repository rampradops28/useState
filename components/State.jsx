import React, { useState } from 'react'

const State = () => {
    const [name,setName] = useState('');
    return (
    <div>
         <form >
            <label htmlFor="name">name</label>
            <input type="text" id="name" value={name} onChange={(e) => {
               setName(e.target.value)
            }}/>

            <h3>name: {name}</h3>
         </form>
    </div>
    )
}

export default State
