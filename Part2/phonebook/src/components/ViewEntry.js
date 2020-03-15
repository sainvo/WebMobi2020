import React from 'react';
import Person from '.components/Person';

const ViewEntry = () =>{
    return(
        <div>
            <h2>Numerot</h2>
            <table>
            <tbody>
                {this.state.persons.map((person,i) => <Person key={i} person={person}/>)}
            </tbody>
            </table>
        </div>
    )
}

export default ViewEntry