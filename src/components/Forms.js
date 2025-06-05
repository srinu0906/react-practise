// function MyForm(){
//     return(
//         <>
//         <h1>Forms</h1>
//         <form>
//             <label>Enter your name: &nbsp;
//                 <input type="text"/>
//             </label>
//         </form>
//         </>
//     );
// }

import { useState } from "react";

function MyForm(){
    const [name,setName] = useState('hi');

    const handleSubmit = (event)=>{
        event.preventDefault();
        alert(`Hello ${name}`);
    }

    // handling multiple inputs
    const [inputs,setInputs] = useState({});

    const handleChange = (event) =>{
        const key = event.target.name;
        const value = event.target.value
        setInputs(values => ({...values,[key]:value}));
    }

    // handling textarea
    const [textarea,setTextarea] = useState("Clear this text and enter some text here");

    const handleTextarea = (event)=>{
        setTextarea(event.target.value)
    }
    return <>
    <form onSubmit={handleSubmit}>
        <label>
            Enter Your Name: 
            {/* <input type="text" value={name} onChange={(e)=>{setName((s)=>( s + e.target.value))}}/> <br/>
            {name}<br/> */}
             <input type="text" value={name} onChange={(e)=> setName(e.target.value)}/> <br/>
            {name}<br/>
        </label>
        <label>
            Enter Your Name:
            <input 
                type="text"
                name="username"
                value={inputs.username || ''}
                onChange={handleChange}
            /> {inputs.username}
        </label><br/>
        <label>
            Enter your age:
            <input 
                type='number'
                name='age'
                value={inputs.age || ''}
                onChange={handleChange}
            />{inputs.age}
        </label><br/>
        <label>
            <textarea
            value={textarea}
            onChange={handleTextarea}
            ></textarea>
            {textarea}
        </label> <br/>
        <input type="submit"/>
    </form>
    </>
}
export {MyForm};