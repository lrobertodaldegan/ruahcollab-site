import { useState, useEffect } from 'react';
import VoluntairCard from '../../../Components/VoluntairCard/VoluntairCard';
import './VoluntairPage.css';

const is = [
  {
    id:0,
    nome:'Fulano',
    resumo:'askjhas asdhaksdhas akshdakshda',
    demanda:'Atendimento psicológico semanal',
    telefone:"+554199999999",
    email:"email@amil.com",
    aceito:true
  },
  {
    id:1,
    nome:'Ciclano',
    resumo:'askjhas asdhaksdhas akshdakshda',
    demanda:'Atendimento psicológico mensal',
    telefone:"+554199999999",
    email:"email@amil.com",
    aceito:true
  },
  {
    id:2,
    nome:'Beltrano',
    resumo:'askjhas asdhaksdhas akshdakshda',
    demanda:'Atendimento psicológico mensal',
    telefone:"+554199999999",
    email:"email@amil.com",
    aceito:false
  },
];

const VoltairPage = () => {
  const [voluntarios, setVoluntarios] = useState([]);

  useEffect(() => {
    setVoluntarios(is);
  }, []);

  const loadVoluntaires = () => {
    let components = [];

    if(voluntarios && voluntarios.length > 0){

      for(let i=0; i < voluntarios.length; i++)
        components.push(<VoluntairCard item={voluntarios[i]}/>);
    }

    return components;
  }

  return (
    <div className='voluntairPage'>
      {loadVoluntaires()}
    </div>
  );
}

export default VoltairPage;