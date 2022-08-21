import React from 'react';
import Card from './Card';
import style from './Card.module.css'


const CardTable = ({title_, idContent_, threads, tecInfo}) => {
    return (
            <Card title={title_} idContent={idContent_} >
                    <div className={style.myTableContainer}>
                    <table>
                        <thead>
                            <tr>
                                {
                                    threads.map((thead, index)=>(
                                        <th key={index}>{thead}</th>
                                    ))
                                }
                            </tr>
                        </thead>
                        <tbody>
                            {tecInfo.map((tec, index) => (
                                <tr key={index}>
                                    {tec.map((i, index)=>(
                                        <td key={index}>{i}</td>
                                    ))
                                    }
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Card >
    )
}

export default CardTable