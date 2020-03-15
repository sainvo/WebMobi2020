import React from 'react'

const NewEntry = () =>{
    return(
        <div>
            <h2>Puhelinluettelo</h2>
            <form onSubmit={this.addContact}>
            <div>
                nimi: <input 
                        value={this.state.newName}
                        onChange={this.handleNameInput}
                    />
            </div>
            <div>
                numero: <input 
                        value={this.state.newNumber}
                        onChange={this.handleNumberInput}
                    />
            </div>
            <div>
                <button 
                type="submit">lisää
                </button>
            </div>
        </form>
      </div>
    )
}


export default NewEntry