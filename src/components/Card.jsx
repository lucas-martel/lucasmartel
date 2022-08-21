import React, { useState } from 'react';
import style from './Card.module.css';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

const Card = (props) =>{ 
    const [isShow, setIsShow] = useState(false)

    const setCardContent = (id, show) =>{
        let cardContent = document.getElementById(id)
        cardContent.style.display = show ? 'block' : 'none'
    }

    return (
        <div className={style.cardContainer}>
            <header className={style.cardHeader}>
                <h3>{props.title}</h3>
                <div
                    className={style.buttonOpen}
                    onClick={()=>{
                        let aux = !isShow
                        setIsShow(aux)
                        setCardContent(props.idContent, aux)
                    }}
                    >{!isShow ? <IoIosArrowDown/> : <IoIosArrowUp/>}
                </div>
            </header>
            <section id={props.idContent} className={style.cardContent}>
                {props.children}
            </section>
        </div>
    )
}

export default Card;