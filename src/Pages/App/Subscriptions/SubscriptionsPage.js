import { useState, useEffect } from 'react';
import SubscriptionCard from '../../../Components/SubscriptionCard/SubscriptionCard';
import {get} from '../../../Utils/restUtils';
import './SubscriptionsPage.css';

const SubscriptionsPage = () => {
  const [inscricoes, setInscricoes] = useState([]);

  useEffect(() => {
    get('/subscription').then(response => {
      if(response.status === 200)
        setInscricoes(response.data);
    });
  }, []);

  const loadInscricoes = () => {
    let components = [];

    if(inscricoes && inscricoes.length > 0){
      for(let i=0; i < inscricoes.length; i++)
        components.push(<SubscriptionCard cancellable={true} item={inscricoes[i]}/>);
    } else {
      components.push(<p>Quando você se inscrever em alguma demanda, mostraremos aqui. ;)</p>);
    }

    return components;
  }

  return (
    <div className='subscriptionsPage'>
      {loadInscricoes()}
    </div>
  );
}

export default SubscriptionsPage;