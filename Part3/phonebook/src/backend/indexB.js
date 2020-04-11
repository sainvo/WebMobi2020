const express = require('express')
const app = express()
const bodyParser = require('body-parser')

//const api = 'This is the backend of a simple phonebook. Access the content at xxx'
app.use(bodyParser.json())

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
    const person = persons.find(person => person.id === id)
        if(person){
            console.log(person)
            res.json(person)
        }else{
            res.status(404).end()
        } 
}) 

app.delete('/api/persons/:id', (req, res) =>{
    const id = Number(req.params.id)
    persons = persons.filter(person => person.id !== id)
    res.status(204).end()
})

//ADDING A PERSON
const generateID = () =>{
    const newId = Math.floor(Math.random()*(1000 -1) + 1)
    return newId
}

app.post('/api/persons', (req,res) =>{
    const body = req.body
    if(body.name === undefined || body.number === undefined){
        return Response.status(400).json({error: 'name or number missing'})
    }
    //create new person
    const person = {
        name: body.name,
        number: body.number
    }
    var newID = generateID()
    if(persons.map(person => person.id !== newID)){
        person.id = newID
    }else{
        newID = generateID()
    }
    //check
    console.log(person)
    //add to list
    persons = persons.concat(person)
   
    res.json(person)
})

const PORT = 3002
app.listen(PORT, () =>{

    console.log(`Server running on ${PORT}`)
})