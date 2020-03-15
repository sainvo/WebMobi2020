import React from 'react'

const Person =({person}) => {
    return(
        <tr >
            <td width="200">{person.name}</td>
            <td width="100">{person.number}</td>
        </tr>
    )
}

export default Person