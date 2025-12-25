import React, { useState } from 'react';
import './App.css'


function Person(props) {
  return(
    <div className='Person' style={{backgroundColor: props.color}}>
      <h3>Nombre: {props.nombre}</h3>
      <p>Edad: {props.edad}</p>
    </div>
  )
 }



function App() {

  return (
    <>
      <div className="App">
      <h1>Hola Mundo </h1>
     
           <Person nombre="Freed" edad="34"  color="gray"/>
             <Person nombre="Pedro" edad="14" color="Red" />
            <Person nombre="Ana" edad="24" color="Green" />
           <Counter/>
             
      </div>
  
    </>
  )
}



  function Counter(){
   const [counter,SetCounter] = useState(0);
   const[show,setShow ]=useState(false);

   const sumarClick=()=>{
    SetCounter(counter+1);
   };
   const showClick=()=>{
    setShow(!show);
   };

   let counterValue=null;
 
   return(
    <div className='text-center mt-4'>
      <h1>Counter</h1>
     {show ? (<p>{counter}</p>) : null}
      <button onClick={sumarClick} className='btn btn.primary'> Add </button>
       <button onClick={showClick} className='btn btn.primary'> Toggle Counter </button>
    </div>
   )
  }

export default App

