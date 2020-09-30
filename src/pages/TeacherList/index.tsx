import React, {FormEvent, useState} from 'react';


import PageHeader from '../../components/PageHeader';
import TeacherItem, {Teacher} from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';
import './styles.css'
import rocketIcon from '../../assets/images/icons/rocket.svg';
import api from '../../services/api';




function TeacherList(){
    const [teachers, setTeachers] = useState([]);

    const [subject, setSubjext] = useState(''); 
    const [week_day, setWeek_day] = useState(''); 
    const [time, setTime] = useState(''); 

    async function searchTeacher(e: FormEvent){
        e.preventDefault();

        const response = await api.get('classes',{
            params:{
                subject,
                week_day,
                time,
            }
        });
        
        setTeachers(response.data);
    }

    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis.">
                <form id="search-teachers" onSubmit={searchTeacher} >
                    <Select  name="subject" label="Matéria" 
                    defaultValue={subject}
                    onChange={(e) => setSubjext(e.target.value)}
                        options={[
                            { value: 'Artes', label: 'Artes'},
                            { value: 'Biologia', label: 'Biologia'},
                            { value: 'Ciências', label: 'Ciências'},
                            { value: 'Educação Física', label: 'Educação Física'},
                            { value: 'Física', label: 'Física'},
                            { value: 'Geografia', label: 'Geografia'},
                            { value: 'Hitória', label: 'Hitória'},
                            { value: 'Matemática', label: 'Matemática'},
                            { value: 'Portugues', label: 'Portugues'},
                            { value: 'Química', label: 'Química'},
                        ]} 
                    />
                    <Select  name="week_day" label="Dia da semana" 
                        defaultValue={week_day}
                        onChange={(e) => setWeek_day(e.target.value)}
                        options={[
                            { value: '0', label: 'Domingo'},
                            { value: '1', label: 'Segunda'},
                            { value: '2', label: 'Terça'},
                            { value: '3', label: 'Quarta'},
                            { value: '4', label: 'Quinta'},
                            { value: '5', label: 'Sexta'},
                            { value: '6', label: 'Sábado'},
                        ]} 
                    />
                    <Input type="time" name="time" label="Hora" 
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                    />
                    <button type="submit" title="Buscar" ><img src={rocketIcon} alt="Buscar"/></button>
                </form>
            </PageHeader>
            <main>
                {
                    teachers.map((teacher: Teacher) =>{
                        return <TeacherItem key={teacher.id} teacher={teacher} />
                    })
                }
            </main>
        </div>
    )
}

export default TeacherList;