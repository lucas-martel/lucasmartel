import React from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom';

import SobreMim from './SobreMim'
import Projetos from "./Projetos.jsx"
import Contato from './Contato.jsx'

import Menu from "./Menu"

const MyRoutes = () => {
    const navigate = useNavigate()

    const selectMenuOption = (rota) => {
        navigate(rota)
    }
    return (
        <>
            <Menu selectMenuOption={selectMenuOption}/>
            <Routes>
                <Route path="/" exact element={<SobreMim />} />
                <Route path="/projetos" exact element={<Projetos />} />
                <Route path="/contato" exact element={<Contato />} />
            </Routes>
        </>
    )
}

export default MyRoutes;