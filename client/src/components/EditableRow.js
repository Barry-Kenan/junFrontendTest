import React from 'react';

function EditableRow({editFormData, handleEditFormChange, handleCancelClick}) {
    return (
        <tr>
            <td>
                <input type="text" name="firstName" required="required" placeholder="Enter a firstname ..."
                       value={editFormData.firstName} onChange={handleEditFormChange}/>
            </td>
            <td>
                <input type="text" name="lastName" required="required" placeholder="Enter a lastname ..."
                       value={editFormData.lastName} onChange={handleEditFormChange}/>
            </td>
            <td>
                <button type="submit">Save</button>
                <button type="button" onClick={handleCancelClick}>Cancel</button>
            </td>
        </tr>
    );
}

export default EditableRow;