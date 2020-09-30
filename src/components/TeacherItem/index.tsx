import React from 'react';
import {useHistory} from 'react-router-dom';
import './styles.css';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import api from '../../services/api';

export interface Teacher{
    id: number;
    subject: string;
    cost: number;
    name: string;
    avatar: string;
    whatsapp: string;
    bio: string;
}




interface TeacherItemProps{
    teacher:Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({teacher}) => {
    const history = useHistory();
    function createNewConnection(){
        api.post('connections', {
            user_id: teacher.id,
        });
        history.push('/');
    }


    return(
            
    <article className="teacher-item">
        <header>
            <img src={teacher.avatar} alt={teacher.name}/>
            <div>
                <strong>{teacher.name}</strong>
                <span>{teacher.subject}</span>
            </div>
        </header>
        <p>
            {teacher.bio}
        </p>
        <footer>
            <p>Preço/hora<strong>R$ {teacher.cost.toFixed(2)}</strong></p>
            
            <a 
                onClick={createNewConnection} 
                href={`https://wa.me/${teacher.whatsapp}?text=Olá Proffy, quero agendar uma aula`}  
                target="_blank" 
            >
                <img src={whatsappIcon} alt="Whatsapp"/>
                Entrar em contato
            </a>
        </footer>
    </article>
    );
}

export default TeacherItem;

