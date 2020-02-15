/*WEB AND MOBILE PROGRAMMING, UTU
* Part2 ex 2.1- 2.3
@author Sanna Volanen
*/
/*TASKS: 
1) Rendering collections, generalize to random amount of courses
2) Total number of exercises, with reduce method
3) Course module
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
    
    return(
    <ol>{units()}</ol>
    )   
}

const App = () => {
    const courses = [
        {
            name: 'Superadvanced web and mobile programming',
            parts: [
                { 
                    name: 'Basics of React',
                    exercises: 8,
                    id: 1 
                },
                {
                    name: 'Using props',
                    exercises: 10,
                    id: 2
                },
                {
                    name:'Component states',
                    exercises: 12,
                    id: 3
                }
            ]
        },
        {
            name: 'TBA',
            parts:[
                {
                    name: 'TBA',
                    exercises: 0,
                    id: 1
                },
                {
                    name: 'TBA',
                    exercises: 0,
                    id: 2
                }
            ]
        }
    ] 
    return(
        <div>
            <h1>Superadvanced web and mobile programming</h1>
            <h2>CURRICULUM</h2>
            <Courses courses={courses}/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))