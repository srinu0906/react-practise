import Car from "./Car";
import { Bike } from './Bike';

function sayHello(x){
    alert('Hello '+x);
}

function Main() {
    let name;
    return <>
        <Car color='green'/>
        <Car color='red'/>
        <Car color='blue'/>
        <Bike color='green'/>
        <Bike color='blue'/>
        <Bike color='yellow'/>
        <input id="name" onBlur={
            () => {
                name = document.getElementById('name').value
            }
        }/> <br/>
        <button onClick={() => sayHello(name)}>Click me!</button> <br/>
        <button onClick={(event)=>{ alert(event.screenY)}}>Click again !</button>
    </>
}

export {Main};