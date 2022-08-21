import React from 'react'
import {SiGmail} from 'react-icons/si'
import {FaTelegramPlane, FaGithub, FaLinkedin} from 'react-icons/fa'
import './Contato.css'


const Contato = () =>{
    return (
        <div className="contato-container">
            <div className="contact-item">
                <SiGmail className="icon-contato"/>
                <p id="email">lucasmartelcavalcante@gmail.com</p>
            </div>
            <div className="contact-item">
                <FaGithub className="icon-contato"/>
                <p id="git"><a href="https://github.com/lucas-martel?tab=repositories" target="_blank" rel="noopener noreferrer">https://github.com/lucas-martel?tab=repositories</a></p>
            </div>
            <div className="contact-item">
                <FaTelegramPlane className="icon-contato"/>
                <p id="telegram"><a href="https://t.me/lucamartel" target="_blank" rel="noopener noreferrer">https://t.me/lucamartel</a></p>
            </div>
            <div className="contact-item">
                <FaLinkedin className="icon-contato"/>
                <p id="linkedin">procurar</p>
            </div>
        </div>
    )
}

export default Contato