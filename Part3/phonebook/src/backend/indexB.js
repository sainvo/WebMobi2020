const express = require('express')
const app = express()

const api = 'This is the backend of a simple phonebook. Access the content at xxx'

let persons = [
    {
        name:"Arto Hellas",
        number:"040-123456",
        id:1
      },
      {
        name: "Martti Tienari",
        number: "040-123456",
        id: 2
      },
      {
        name: "Arto Järvinen",
        number: "040-123456",
        id: 3
      },
      {
        name: "Lea Kutvonen",
        number: "040-123456",
        id: 4
      }
]
app.get('/api', (req,res) =>{
    res.send('<h2>This is the backend of a phonebook</h2>')
})
/*
app.get('/api', (req,res)=>{
    response.send({api})
})
*/
app.get('/api/persons', (req, res) =>{
    res.json(persons)
})

app.get('/api/persons/:id',(req,res) =>{
    const id = Number(req.params.id)
    console.log(id)
    const person = persons.find(person => person.id)
        if(person){
            console.log(person)
            res.json(person)
        }else{
            res.status(404).end()
        } 
}) 

app.delete('/api/persons/:id', (req, res) =>{
    const id = Number(req.params.id)
    persons = persons.filter(person = person.id !== id)
    res.status(204).end()
})

const PORT = 3002
app.listen(PORT, () =>{

    console.log(`Server running on ${PORT}`)
})