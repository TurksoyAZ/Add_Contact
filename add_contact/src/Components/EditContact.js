import React from 'react'

function EditableRow({ editFormData, handleEditFormChange,handleCancelClick }) {
    return (
        <tr >
            <td>
                <input type="text" name="fullName"  required='required' value={editFormData.fullName}  onChange={handleEditFormChange} />
            </td>
            <td>
                <input type="text" name="address" required='required' value={editFormData.address}  onChange={handleEditFormChange} />
            </td>
            <td>
                <input type="text" name="phoneNumber" required='required' value={editFormData.phoneNumber}  onChange={handleEditFormChange} />
            </td>
            <td>
                <input type="text" name="email" required='required'  value={editFormData.email}  onChange={handleEditFormChange} />
            </td>
            <td> <button type='submit'>Save</button> <button type='submit' onClick={handleCancelClick}>Cancel</button> </td>
        </tr>
    )
}

export default EditableRow