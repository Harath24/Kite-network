import React, {useState} from "react";
import style from '../paginator/Paginator.module.css'


let Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10, ...props}) => {
    let pageCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }
    let portionCount = Math.ceil(pageCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionNumber = portionNumber * portionSize


    return (
        <div className={style.paginator}>
            {portionNumber > 1 && <button className={style.toggle} onClick={() => {setPortionNumber(1)}}>&laquo;</button>}
            {portionNumber > 1 && <button className={style.toggle} onClick={() => {setPortionNumber(portionNumber - 1)}}>&larr;</button>}
            <div className={style.btnNumb}>{pages
                .filter(p => p >= leftPortionNumber && p <= rightPortionNumber)
                .map(p => {
                    return <button className={currentPage === p && style.selectedPage} onClick={() => {
                        onPageChanged(p)
                    }}>{p}</button>
                })}</div>
            {portionCount > portionNumber &&
            <button className={style.toggle} onClick={() => {
                setPortionNumber(portionNumber + 1)
            }}>&rarr;</button>}
            {portionCount > portionNumber && <button className={style.toggle} onClick={() => {setPortionNumber(portionCount)}}>&raquo;</button>}
        </div>
    )
    }

export default Paginator;