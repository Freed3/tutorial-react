import React,{useState} from 'react'
import Person from '../Persons/Person/Person'


const Persons = () => {

     const [persons,setPersons]=useState([
    {
      id: 1,
      name: "Kevin",
      role: "Frontend Developer",
      img: "https://bootdey.com/img/Content/avatar/avatar2.png",
    },
    {
      id: 2,
      name: "Alex",
      role: "Backend Developer",
      img: "https://bootdey.com/img/Content/avatar/avatar3.png",
    },
    {
      id: 3,
      name: "Ben",
      role: "Designer",
      img: "https://bootdey.com/img/Content/avatar/avatar4.png",
    },
  ]);

        
    
  return (

   
    <div className='row'>
        {persons.map((persons) =>{
            return(
               <Person 
               key={persons.id}name={persons.name} 
               img={persons.img} 
               role={persons.role}  
               />
            )
        })}   
      
    </div>
  )
}

export default Persons
