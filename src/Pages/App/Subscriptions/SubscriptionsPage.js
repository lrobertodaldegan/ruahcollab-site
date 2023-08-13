import { useState, useEffect } from 'react';
import SubscriptionCard from '../../../Components/SubscriptionCard/SubscriptionCard';
import './SubscriptionsPage.css';

const is = [
  {
    id:0,
    titulo:'Atendimento psicológico Semanal',
    desc:'askjhas asdhaksdhas akshdakshda',
    recorrencia:'Semanal',
    status:'aceito',
    instituicao: {
      nome: 'Batatinha',
      endereco: 'asdasd',
      qtdDemandas: 10,
      telefone:'9999999999',
      email: 'email@email.com',
      fotos:['https://picsum.photos/200', 'https://picsum.photos/300', 'https://picsum.photos/100']
    }
  },
  {
    id:1,
    titulo:'Atendimento social Mensal',
    desc:'askjhas asdhaksdhas akshdakshda',
    recorrencia:'Mensal',
    status:'pendente',
    instituicao: {
      nome: 'Batatinha',
      endereco: 'asdasd',
      qtdDemandas: 10,
      telefone:'9999999999',
      email: 'email@email.com',
      fotos:['https://picsum.photos/200', 'https://picsum.photos/300', 'https://picsum.photos/100']
    }
  },
  {
    id:2,
    titulo:'Atendimento social Mensal',
    desc:'askjhas asdhaksdhas akshdakshda',
    recorrencia:'Mensal',
    instituicao: {
      nome: 'Batatinha',
      endereco: 'asdasd',
      qtdDemandas: 10,
      telefone:'9999999999',
      email: 'email@email.com',
      fotos:['https://picsum.photos/200', 'https://picsum.photos/300', 'https://picsum.photos/100']
    }
  }
];

const SubscriptionsPage = () => {
  const [inscricoes, setInscricoes] = useState([]);

  useEffect(() => {
    setInscricoes(is);
  }, []);

  const loadInscricoes = () => {
    let components = [];

    if(inscricoes && inscricoes.length > 0){

      for(let i=0; i < inscricoes.length; i++)
        components.push(<SubscriptionCard item={inscricoes[i]}/>);
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