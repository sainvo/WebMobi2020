import React from 'react';
import Person from './components/Person'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        {
          name: 'Arto Hellas' }
      ],
      newName: ''
    }
  }
  //handles adding the name to list
  addName= (event) =>{
    event.preventDefault()
    //const nameObject = 
    if(this.validateInput(this.state.newName)){
      const personObject = {name: this.state.newName}
      const persons = this.state.persons.concat(personObject)
      this.setState({
        persons, 
        newName: ''
      })
    }
    
  }
    
  //updates the changes to state from input field
  handleNameAdd = (event) =>{
    console.log(event.target.value)
    this.setState({newName: event.target.value})
  }

  validateInput = (temp) => {
    let people = this.state.persons
    if(people.map(p => p.name).includes(temp)){
      alert('Tämä henkilö löytyy jo')
      return false
    }
    else{
      return true
    }
  }

  render() {
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <form onSubmit={this.addName}>
          <div>
            nimi: <input 
                    value={this.state.newName}
                    onChange={this.handleNameAdd}
                  />
          </div>
          <div>
            <button 
              type="submit">lisää
            </button>
          </div>
      </form>
        <h2>Numerot</h2>
        <table>
        <tbody>
          {this.state.persons.map((person,i) => <Person key={i} person={person}/>)}
       </tbody>
        </table>
        

      
      </div>
    )
    
  }
  
}

export default App
