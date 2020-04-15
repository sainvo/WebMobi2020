const express = require('express')
const app = express()

//middleware
const bodyParser = require('body-parser')
app.use(bodyParser.json())

const logger = (req,res,next)=>{
    console.log('Method: ', req.method)
    console.log('Path: ', req.path)
    console.log('Body: ', req.body)
    console.log('------------')
    next()
}
app.use(logger)

//CORS
const cors = require('cors')
app.use(cors())

//hard-coded list
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

//HTTP request route handlers
app.get('/api', (req,res) =>{
    res.send('<h2>This is the backend of a phonebook</h2>')
})

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
    console.log(body)
    var newPerson = {
        name: '',
        number: ''
    }
    if(body.name === undefined){
        return res.status(404).json({error: 'name missing'})
    }
    else if(body.number === undefined){
        return res.status(404).json({error: 'number missing'})
    }
    else{
        let names = persons.map(person => person.name)
        let numbers = persons.map(person => person.number)
        console.log(names)
        console.log(numbers)
        if(!names.includes(body.name)){
            newPerson.name = body.name
            if(!numbers.includes(body.number)){
                newPerson.number = body.number
            }
            else{
                return res.status(403).json({error: 'number already exists'})
            }
        }else{
            return res.status(403).json({error: 'name must be unique'})  
        }
        
    }
    var newID = generateID()
    if(persons.map(person => person.id !== newID)){
        newPerson.id = newID
    }else{
        newID = generateID()
    }
    //check
    console.log(newPerson)
    //add to list
    persons = persons.concat(newPerson)
   
    res.json(newPerson)
})
const error = (request, response) => {
    response.status(404).send({error: 'unknown endpoint'})
  }
  
app.use(error)
//event listener for server
const PORT = process.env.PORT ||3002
app.listen(PORT, () =>{
    console.log(`Server running on ${PORT}`)
})