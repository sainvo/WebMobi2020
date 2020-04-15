import axios from 'axios'
const baseUrl = 'http://localhost:3002/api/persons'

const getAll = () => {
     return axios.get(baseUrl)
}

const create = (newObject) => {
     return axios.post(baseUrl, newObject)
}
const update = (id, newObject) => {
     return axios.put(`${baseUrl}/${id}`, newObject)
}
const remove = (chosenObject) => {
     return axios.delete(baseUrl, chosenObject)
}
/*
const errorhandling = () => {
    return axios.get(baseUrl)
    .then(response =>{
        console.log('success')
    })
    .catch(error =>{
        console.log('fail')
    })
}
*/
export default { getAll, create, update, remove }