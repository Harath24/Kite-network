import React, {useState, useEffect} from 'react'


const ProfileStatusHooks = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)
    useEffect( () => {
        setStatus(props.status)
    }, [props.status] )
    const activateEditMode = () => {
        setEditMode(true)
    }
    const updateStatus = () => {
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
                <span>{props.status || 'No Status'}</span>
                <div>
                    <button onClick={activateEditMode}>Change Status</button>
                </div>
            </div>

            }
            {editMode &&
            <div>
                <input onChange={onStatusChange} value={status} autoFocus={true} />
                <div>
                    <button onClick={updateStatus}>Update Status</button>
                </div>
            </div>
            }
        </div>
    )
}


export default ProfileStatusHooks;