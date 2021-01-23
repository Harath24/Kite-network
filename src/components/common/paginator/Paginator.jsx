import React from "react";
import style from '../paginator/Paginator.module.css'


let Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged, ...props}) => {
    let pageCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for(let i =1; i <= pageCount; i++){
        pages.push(i)
    }
    return (
        <div>
            <div className={style.btnNumb}>{pages.map(p => {
                return <button className={currentPage === p && style.selectedPage} onClick={() => {
                    onPageChanged(p)
                }}>{p}</button>
            })}</div>
        </div>
    )
}

export default Paginator;