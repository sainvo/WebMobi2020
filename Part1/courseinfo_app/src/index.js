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
    return(
        <div><b>Total of exercises: {props.course.parts[0].exercises+props.course.parts[1].exercises+props.course.parts[2].exercises}</b></div>
    )
} 


const App = () => {
    const course ={
        name: 'Half Stack application development',
        parts: [
            { 
                name: 'Fundamentals of React',
                exercises: 10 
            },
            {
                name: 'Using props to pass data',
                exercises: 7
            },
            {
                name:'State of a component',
                exercises: 14
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