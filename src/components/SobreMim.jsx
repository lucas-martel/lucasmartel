import React from 'react';
import './SobreMim.css'
import perfil from '../imgs/perfil.jpeg'
import Card from './Card';
import CardTable from './CardTable';

const SobreMim = () => {
    const thTecWeb = [
        'tecnologias', 'nível de conhecimento'
    ]
    const tdTecWeb = [
        ['html, css, js', '7 de 10'],
        ['react.js', '6 de 10'],
        ['SASS', '7 de 10'],
        ['bootstrap', '6 de 10']
    ]
    const thLinguagens = ['Linguagens', 'nível de conhecimento']
    const tdLinguagens = [
        ['c', '7 de 10'],
        ['c++', '6 de 10'],
        ['java', '5 de 10'],
        ['javaScript', '8 de 10'],
        ['c#', '6 de 10'],
        ['python', '5 de 10']
    ]
    const thMetodologias = ['Metologias']
    const tdMetologias = [
        ['scrum'],
        ['kanban']
    ]


    return (
        <div className="sobre-mim-container">
            <Card title="Sobre Mim" idContent="sobre-mim-card">
                <div className="sobre-mim-section">
                    <img id="perfil-img" src={perfil} alt="foto de perfil" />
                    <p>Olá, Meu nome é lucas leonã, estudante de engenharia de software pela universidade federal do amazonas(ufam).
                        <br />
                        Atualmente estou focado no estudo de front end usando tecnologias como react, jquery, bootstrap, sass, babel js, dentre outras.</p>
                </div>
            </Card>
            <CardTable
                title_="Tecnologias Web que Conheço"
                idContent_="tec-web-cardTable"
                threads={thTecWeb}
                tecInfo={tdTecWeb} />
            <CardTable
                title_="Linguagens que Conheço"
                idContent_="linguagens-cardTable"
                threads={thLinguagens}
                tecInfo={tdLinguagens} />
            <CardTable
                title_="Metologias agéis que Conheço"
                idContent_="metodologias-cardTable"
                threads={thMetodologias}
                tecInfo={tdMetologias} />
        </div>
    )
}

export default SobreMim;