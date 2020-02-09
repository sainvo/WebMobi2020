/*Web and Mobile Development, UTU 
* Part1 ex1-5
@author Sanna Volanen
*/


import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) =>{ //renderöi kurssin nimen otsikoksi
    return(
        <div><b><u>{props.courseName}</u></b></div>
    )
}
const Part = (props)=>{ //renderöi osan nimen ja tehtävämäärä
    console.log(props)
    return(
        <div>
           <p> {props.name}, {props.exercises}</p>
        </div>
    )
}

const Content = (props) =>{ //renderöi kurssin osat; param props on array
    console.log(props)
    return(
        <div>
            <Part name = {props.course.parts[0].name} exercises={props.course.parts[0].exercises}/>
            <Part name = {props.course.parts[1].name} exercises={props.course.parts[1].exercises}/>
            <Part name = {props.course.parts[2].name} exercises={props.course.parts[2].exercises}/>
    </div>  
    )
}

const Total = (props) =>{ //renderöi kurssin tehtävien kokonaismäärän
    console.log(props)
    const exercises = props.course.parts.map(part => part.exercises)
    console.log(exercises)
    return(
        <div><b>Total of exercises: {exercises[0]+ exercises[1]+exercises[2]}</b></div>
    )
} 


const App = () => {
    const course ={
        name: 'Superadvanced web and mobile programming',
        parts: [
            { 
                name: 'Basics of React',
                exercises: 8 
            },
            {
                name: 'Using props',
                exercises: 10
            },
            {
                name:'Component states ',
                exercises: 12
            }
        ]
    }    

    return(
        <div>
            <Header courseName={course.name}/>
            <br></br>
            <Content course={course}/>
            <br></br>
            <Total course={course}/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))