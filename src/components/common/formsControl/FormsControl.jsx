import React from 'react'
import style from './FormsControl.module.css'

export const FormControl = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error
    const SpecialTeg = () => {
        if(props.typefield === 'textarea'){ return <textarea {...input} {...props} />
        }else if(props.typefield === 'input') {return <input {...input} {...props} />}
        else if(props.typefield === 'checkbox') return <input {...input} {...props} type='checkbox'/>
    }
    return (
        <div className={style.formControl + ' ' + (hasError ? style.errors : '')}>
            <div>
                <SpecialTeg />
            </div>
            <div>
                {hasError && <span>{meta.error}</span>}
            </div>

        </div>
    )
}