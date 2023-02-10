import React from 'react'

function ReadOnlyRow({ contact,handleEditClick,handleDeletClick }) {
    return (
        <tr>
            <td>{contact.fullName}</td>
            <td>{contact.address}</td>
            <td>{contact.phoneNumber}</td>
            <td>{contact.email}</td>
            <td> <button onClick={(event)=>handleEditClick(event,contact)}>Edit</button> <button type='submit' onClick={()=>handleDeletClick(contact.id)}>Delete</button></td>
        </tr>
    )
}

export default ReadOnlyRow