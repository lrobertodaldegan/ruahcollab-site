import { useState, useEffect } from 'react';
import DemandCard from '../../../Components/DemandCard/DemandCard';
import './DemandsPage.css';

const is = [
  {
    id:0,
    titulo:'Atendimento psicológico Semanal',
    desc:'askjhas asdhaksdhas akshdakshda',
    recorrencia:'Semanal',
  },
  {
    id:1,
    titulo:'Atendimento social Mensal',
    desc:'askjhas asdhaksdhas akshdakshda',
    recorrencia:'Mensal',
  },
];

const DemandsPage = () => {
  const [demandas, setDemandas] = useState([]);

  useEffect(() => {
    setDemandas(is);
  }, []);

  const loadDemands = () => {
    let components = [];

    if(demandas && demandas.length > 0){

      for(let i=0; i < demandas.length; i++)
        components.push(<DemandCard item={demandas[i]}/>);
    }

    return components;
  }

  return (
    <div className='demandsPage'>
      {loadDemands()}
    </div>
  );
}

export default DemandsPage;