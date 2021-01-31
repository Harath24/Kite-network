import React, {useState, useEffect} from 'react'
import style from './ProfileInfo.module.css'


const ProfileStatusHooks = (props) => {


    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)
    useEffect(() => {
        setStatus(props.status)
    }, [props.status])
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
                <b>Status</b>: <span>{props.status || 'No Status'}</span>
                {props.userId === undefined && <div>
                    <button className={style.statusBtn} onClick={activateEditMode}>Change Status</button>
                </div>}
            </div>
            }
            {editMode &&
            <div>
                <input className={style.statusInput} onChange={onStatusChange} value={status} autoFocus={true}/>
                <div>
                    <button className={style.statusBtn} onClick={updateStatus}>Update Status</button>
                </div>
            </div>
            }
        </div>
    )
}


export default ProfileStatusHooks;