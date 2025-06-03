import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
// import  {Main}  from './components/Main';
// import { Main } from './components/Body';
// import Car  from './components/car'
// import { Vote } from './components/Conditionals';
import {Rainbow ,WeekDays}from './components/Lists';

function App() {
  return (
    <>
    <Header/>
    {/* <Main /> */}
    {/* <Vote age={'15'}/> */}
    <Rainbow/>
    <WeekDays/>
    <Footer/>
    </>
  );
}

export default App;
