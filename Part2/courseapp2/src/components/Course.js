import React from 'react'

const Header = ({course}) =>{ //renderöi kurssin nimen otsikoksi
     return(
         <div>
             <h2>
                 <b><u>{course.name}</u></b>
             </h2>
         </div>
     )
 }
 
 const Content = ({course}) =>{              //renderöi kurssin osat; param props on array
     const parts = () =>            //renderöi osan nimen ja tehtävämäärä
         course.parts.map(part =>
             <li key={part.id}>
                 {part.name}, {part.exercises}
             </li>
         )
         return(
             <ul>{parts()}</ul>
         )
 }    

 const Total = ({course}) =>{ //renderöi kurssin tehtävien kokonaismäärän
     //mapataan exercises alkiot ulos coursesta
     const exercises = course.parts.map(part =>part.exercises)
     console.log({exercises})
     //iteroidaan reducella summaksi
     var total = exercises.reduce((total, value)=>{
         console.log(total, value)
         return total + value
     })
     console.log({total})
     //palautetaan muotoiltu Total
     return(
         <p><b>Total of {total} exercises</b></p>
     )
 }

const Course = ({course}) =>{
     
     return (
         <div>
             <Header course={course} />
             <Content course={course}/>
             <Total course={course}/>
         </div>
     )
}
 
export default Course