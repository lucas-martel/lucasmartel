import React from 'react';
import "./Projetos.css"


const Projetos = () => {
    const proj = [
        {link: 'https://lucas-martel.github.io/front-end-mentor-intro-section-with-dropdown-navigation-main/', 
            title: 'dropdown navigation main',
            description: 'Interface criada para o desafio de intro-section-with-dropdown-navigation-main do front-end-mentor.'
        }, 
        {
            link: 'https://lucas-martel.github.io/front-end-mentor-product-preview-card-component-main/',
            title: 'card component main',
            description: 'Interface criada para o desafio de product-preview-card-component-main do front-end-mentor.'
        },
        {
            link: 'https://lucas-martel.github.io/task_manager/',
            title: 'task manager',
            description: 'Uma aplicação simples criada com react para praticar habilidades usando hooks, e props.'
        },
        {
            link: 'https://lucas-martel.github.io/ufoGame/',
            title: 'ufo game',
            description: 'Um jogo criado usando js, html e css apenas. Desenvolvido para praticar habilidades inerentes ao desenvolvimento de sistemas web.'
        }
    ]

    proj.sort((a, b)=> {
        let esq = a.title.toUpperCase(),
            dir = b.title.toUpperCase();
        return esq === dir ? 0 : esq < dir ? -1 : 1;
    })

    const scroolToUp = () => {
        let projetos = document.querySelector(".projetos-container")
        projetos.scrollTo(0, 0)
    }

    return (
        <div className="projetos-container" onLoad={scroolToUp}>
            {proj.map( (i, index)=>(
                    <div key={index} className="projeto-item">
                        <div className="titulo"><a href={i.link}>{i.title}</a></div>
                        <iframe 
                            title={i.title} 
                            src={i.link} 
                            scrolling='no'
                             ></iframe>
                        <div className="descricao">{i.description}</div>
                    </div>
            ))}
        </div>
    )


}

export default Projetos;