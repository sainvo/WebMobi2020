import axios from 'axios'
const baseUrl = 'api/persons'

const getAll = () => {
     const req = axios.get(baseUrl)
     return req.then(response => response.data)
}

const create = (newObject) =>{
    return axios.post(baseUrl, newObject)
}
const update = (id, newObject) =>{
    return axios.put(`${baseUrl}/${id}`, newObject)
}
const remove = (chosenObject) =>{
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