import { useState, useEffect } from 'react';
import VoluntairCard from '../../../Components/VoluntairCard/VoluntairCard';
import './VoluntairPage.css';
import {get, post} from '../../../Utils/restUtils';

const VoltairPage = () => {
  const [inscricoes, setInscricoes] = useState([]);

  useEffect(() => {
    load();
  }, []);

  const load = () => {
    get('/subscription/institution').then(response => {
      if(response.status == 200)
        setInscricoes(response.data);
    });
  }

  const renderVoluntaires = () => {
    let components = [];

    inscricoes.forEach(insc => components.push(<VoluntairCard item={insc}/>));

    return components;
  }

  return (
    <div className='voluntairPage'>
      {renderVoluntaires()}
    </div>
  );
}

export default VoltairPage;