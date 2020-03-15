import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'

//import axios from 'axios'

/*axios.get('http://localhost:3001/persons').then(response => {
    const phonebook = response.data
    ReactDOM.render(
    <App phonebook={phonebook} />, 
    document.getElementById('root'))
})*/
/*)
const Persons = ({persons}) =>{
    console.log(persons)
    const contacts = () =>
        persons.map(person =>
            <Contact key={name}
            name={name}/>
            )
    return(
        <ul>{contacts}</ul>
    )
}*/
ReactDOM.render(
    <App />, document.getElementById('root'))