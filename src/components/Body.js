import Car from "./Car";
import { Bike } from './Bike';
function Main() {
    return <>
        <Car color='green'/>
        <Car color='red'/>
        <Car color='blue'/>
        <Bike color='green'/>
        <Bike color='blue'/>
        <Bike color='yellow'/>
    </>
}

export {Main};