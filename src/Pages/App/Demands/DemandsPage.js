import { useState, useEffect } from 'react';
import DemandCard from '../../../Components/DemandCard/DemandCard';
import Toast from '../../../Components/Toast/Toast';
import './DemandsPage.css';
import {get} from '../../../Utils/restUtils';

const DemandsPage = () => {
  const [demandas, setDemandas] = useState([]);
  const [error, setError] = useState({});

  useEffect(() => {
    load();
  }, []);

  const load = () => {
    setDemandas([]);

    get('/demand/institution').then(response => {
      if(response.status === 200)
        setDemandas(response.data);
      else
        setError({error:true, message:'Houve um erro ao tentar carregar as demandas! Tente novamente mais tarde!'});
    });
  }

  const handleDeletion = (result) => {
    setError(result);

    if(result.error === false)
      load();
  }

  const handleSave = (result) => {
    setError(result);

    load();
  }

  const loadDemands = () => {
    let components = [];

    if(demandas && demandas.length > 0){
      for(let i=0; i < demandas.length; i++)
        components.push(
          <DemandCard item={demandas[i]}
              onSave={(result) => handleSave(result)}
              onDelete={(result) => handleDeletion(result)}
          />
        );
    }

    return components;
  }

  const loadToast = () => {
    if(error && error.message) {
      return <Toast label={error.message} onClose={() => setError({})}/>
    } else {
      return <></>
    }
  }

  return (
    <div className='demandsPage'>
      {loadToast()}
      <DemandCard onSave={(result) => handleSave(result)}/>
      <br/>
      {loadDemands()}
    </div>
  );
}

export default DemandsPage;