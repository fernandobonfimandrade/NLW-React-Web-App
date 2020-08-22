import React from 'react';

import './styles.css';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

interface TeacherItemProps{
    title?: string;
}

const TeacherItem: React.FC<TeacherItemProps> = (props) => {
    return(
            
    <article className="teacher-item">
        <header>
            <img src="https://avatars0.githubusercontent.com/u/4580527?s=460&u=36e171284be71e66b2a69d5e656358145a5b06d1&v=4" alt="Fernando Bonfim"/>
            <div>
                <strong>Fernando Bonfim</strong>
                <span>Ingles</span>
            </div>
        </header>
        <p>
            Senior back-end programmer <br /> I love working with the internet
        </p>
        <footer>
            <p>Preço/hora<strong>R$ 80,00</strong></p>
            
            <button type="button" >
                <img src={whatsappIcon} alt="Whatsapp"/>
                Entrar em contato
            </button>
        </footer>
    </article>
    );
}

export default TeacherItem;

