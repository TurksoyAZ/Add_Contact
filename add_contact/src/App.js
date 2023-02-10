import React from 'react';
import { Fragment } from 'react';
import './App.css';
import { nanoid } from 'nanoid'
import EditContact from './Components/EditContact';
import AddContact from './Components/AddContact';
function App() {

  const [contact, setContact] = React.useState([
    {
      id: 1,
      fullName: "Alex Ferray",
      address: "Berlin,Mosart 8",
      phoneNumber: "422-112-344",
      email: "AlexFerray@gmail.com"
    }
  ])

  const [addFormData, setAddFormData] = React.useState({
    fullName: '',
    address: '',
    phoneNumber: '',
    email: ''
  })

  // Toggle
  const [editContactId, setEditContactId] = React.useState(null)

  // Edit data
  const [editFormData, setEditFormData] = React.useState({
    fullName: '',
    address: '',
    phoneNumber: '',
    email: ''
  })

  const handleAddFormChange = (event) => {
    event.preventDefault()
    // 1
    const fieldName = event.target.getAttribute('name')
    // 2
    const newFormData = { ...addFormData }
    // 3
    newFormData[fieldName] = event.target.value
    // 4
    setAddFormData(newFormData)
  }

  const handleAddFormSubmit = (event) => {
    event.preventDefault()
    // 1
    const newContact = {
      id: nanoid(),
      fullName: addFormData.fullName,
      address: addFormData.address,
      phoneNumber: addFormData.phoneNumber,
      email: addFormData.email
    }
    // 2
    const newContacts = [...contact, newContact]
    // 3
    setContact(newContacts)
    setAddFormData('')
  }

  // Toggle
  const handleEditClick = (event, contact) => {
    event.preventDefault()
    // 1
    setEditContactId(contact.id)
    const formValues = {
      fullName: contact.fullName,
      address: contact.address,
      phoneNumber: contact.phoneNumber,
      email: contact.email
    }
    // 2
    setEditFormData(formValues)
  }

  // 
  const handleEditFormChange = (event) => {
    event.preventDefault()

    // 1
    const fieldName = event.target.getAttribute('name')
    // 2
    const newFormData = { ...editFormData }
    // 3
    newFormData[fieldName] = event.target.value
    // 4
    setEditFormData(newFormData)
  }

  // Save edit
  const handlEditFormSubmit = (event) => {
    event.preventDefault()
    // 1
    const editContact = {
      id: editContactId,
      fullName: editFormData.fullName,
      address: editFormData.address,
      phoneNumber: editFormData.phoneNumber,
      email: editFormData.email,
    }
    // 2
    const newContacts = [...contact]
    // 3
    const index = contact.findIndex((contact) => contact.id === editContactId)
    // 4
    newContacts[index] = editContact
    // 5
    setContact(newContacts)
    setEditContactId(null)
  }

  // cancel
  const handleCancelClick =()=>{
    setEditContactId(null)
  }

  // delet

  const handleDeletClick=(contactId)=>{
    // 1
    const newContacts=[...contact]
    // 2
    const index= contact.findIndex((contact)=> contact.id === contactId)
    // 3
    newContacts.splice(index, 1)

    setContact(newContacts)
  }
  return (
    <section className="App">
      <article className='appArticle'>

        <form className='form1'  onSubmit={handlEditFormSubmit}>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Address</th>
                <th>Phone Number</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {contact.map((contact, index) => (
                <Fragment key={index} >

                  {editContactId === contact.id
                    ? (<EditContact editFormData={editFormData} handleEditFormChange={handleEditFormChange} handleCancelClick={handleCancelClick} />)
                    : (<AddContact contact={contact} handleEditClick={handleEditClick} handleDeletClick={handleDeletClick}/>)}

                </Fragment>
              ))}

            </tbody>
          </table>
        </form>

        <form className='form2' onSubmit={handleAddFormSubmit}>
          <h1>Add Information</h1>
          <div className='inputDiv'>
            <input type="text" name='fullName' required='required' placeholder='Type your name' onChange={handleAddFormChange} />
            <input type="text" name='address' required='required' placeholder='Type your address' onChange={handleAddFormChange} />
            <input type="number" name='phoneNumber' required='required' placeholder='Type your phone number' onChange={handleAddFormChange} />
            <input type="email" name='email' required='required' placeholder='Type your email' onChange={handleAddFormChange} />
            <button type='submit'>Add</button>
          </div>
        </form>
      </article>

    </section>
  );
}

export default App;
