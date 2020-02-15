/*Fullstack MOOC Part2 ex 2.1- 2.5 (EVAL)
@author Matti Luukkainen
@editor Sanna Volanen
*/
/*TASKS: 
1) Course component
2) Total
3) Total with reduce method
4) Generalize to random amount of courses
5) Course module
*/

import React from 'react';
import ReactDOM from 'react-dom';
import Course from './components/Course'

const Courses = ({courses}) => {
    console.log(courses)
    const units = () =>
        courses.map(unit =>
        <Course key={unit.name}
            course ={unit}
        />     
        )
//let's take one course at a time out of the courses array
    //course component contains the rendering of all subcomponents, Header, Content and Total
    //MAKE COURSE A SEPARATE COMPONENT
    /*const Course = ({course}) =>{
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
        return (
            <div>
                <Header course={course} />
                <Content course={course}/>
                <Total course={course}/>
            </div>
        )
    }*/ 
    
    return(
    <ol>{units()}</ol>
    )   
}
//SCALING UP NO OF COURSES
const App = () => {
    const courses = [
        {
            name: 'Half Stack application development',
            parts: [
                { 
                    name: 'Fundamentals of React',
                    exercises: 10,
                    id: 1 
                },
                {
                    name: 'Using props to pass data',
                    exercises: 7,
                    id: 2
                },
                {
                    name:'State of a component',
                    exercises: 14,
                    id: 3
                }, 
                {
                    name: 'Redux',
                    exercises: 11,
                    id: 4
                }
            ]
        },
        {
            name: 'Node.js',
            parts:[
                {
                    name: 'Node.js',
                    exercises: 3,
                    id: 1
                },
                {
                    name: 'Middlewares',
                    exercises: 7,
                    id: 2
                }
            ]
        }
    ] 
    return(
        <div>
            <h1>BASICS OF WEB DEVELOPMENT</h1>
            <h2>CURRICULUM</h2>
            <Courses courses={courses}/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))