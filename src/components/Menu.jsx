import React from 'react';
import "./Menu.css"

const Menu = ({selectMenuOption}) => {
    
    const clickMenuItem = (e) =>{
        e.preventDefault();
        let itens = document.querySelectorAll(`[data-menu-Item]`)
        itens.forEach(item => {item.classList.remove("bottom")})
        e.target.classList.add("bottom");
        let rota = e.target.getAttribute('data-menu-item')
        selectMenuOption(rota)
    }

    return (
        <div className="menu-inicial">
            <div 
                onClick={clickMenuItem}
                data-menu-item="/" 
                className="sobre menu-option">Sobre Mim</div>
            <div 
                onClick={clickMenuItem}
                data-menu-item="/projetos" 
                className="sobreprojetos menu-option">Projetos</div>
            <div 
                onClick={clickMenuItem}
                data-menu-item="/contato" 
                className="contato menu-option">Contato</div>
        </div>
    )
}

export default Menu;