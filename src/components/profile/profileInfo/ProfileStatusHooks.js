import React, {useState} from 'react'


const ProfileStatusHooks = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)
    const activateEditMode = () => {
        setEditMode(true)
    }
    const deActivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {!editMode &&
            <div>
                <span onDoubleClick={activateEditMode}>{props.status || 'No Status'}</span>
            </div>
            }
            {editMode &&
            <div>
                <input onChange={onStatusChange} value={status}/>
                <div>
                    <button onClick={deActivateEditMode}>Update Status</button>
                </div>
            </div>
            }
        </div>
    )
}


export default ProfileStatusHooks;