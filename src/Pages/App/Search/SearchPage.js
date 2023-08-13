import { useState, useEffect } from 'react';
import SubscriptionCard from '../../../Components/SubscriptionCard/SubscriptionCard';
import InstitutionCard from '../../../Components/InstitutionCard/InstitutionCard';
import './SearchPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLungs, faPlaceOfWorship, faSearch } from '@fortawesome/free-solid-svg-icons';

const is = [
  {
    id:2,
    tipo:'d',
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
  },
  {
    id:0,
    tipo:'d',
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
    tipo:'d',
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
    id:23,
    tipo:'i',
    nome: 'Batatinha',
    resumo: 'Resumo detalhes Resumo detalhes Resumo detalhes Resumo detalhes',
    endereco: 'asdasd',
    qtdDemandas: 10,
    telefone:'9999999999',
    email: 'email@email.com',
    fotos:['https://picsum.photos/200', 'https://picsum.photos/300', 'https://picsum.photos/100']
  },
  
];

const tiposPesquisa = { AMBOS: 'a', DEMANDAS: 'd', INSTITUICOES: 'i' }

const SearchPage = () => {
  const [termoPesquisa, setTermoPesquisa] = useState('');
  const [tipoPesquisa, setTipoPesquisa] = useState(tiposPesquisa.AMBOS);
  const [results, setResults] = useState([]);

  useEffect(() => {
    
  }, []);

  const loadResults = () => {
    let components = [];

    if(results && results.length > 0){

      for(let i=0; i < results.length; i++){
        if(results[i].tipo === 'd')
          components.push(<SubscriptionCard item={results[i]}/>);
        
        if(results[i].tipo === 'i')
          components.push(<InstitutionCard item={results[i]}/>);
      }
    }

    return components;
  }

  const handleChangeTipoPesquisa = (tipoP) => {
    if(tipoPesquisa === tipoP)
      setTipoPesquisa(tiposPesquisa.AMBOS);
    else
      setTipoPesquisa(tipoP);
  }

  return (
    <div className='searchResultsPage'>
      <div className='row searchForm'>
        <div className='col-9'>
          <div className='wrapInputPesquisa'>
            <input type='text' 
                placeholder='Busque por demandas ou instituições'
                value={termoPesquisa} 
                onChange={(e) => setTermoPesquisa(e.target.value)}
            />
            <FontAwesomeIcon icon={faSearch} className='searchBtn'
                onClick={() => setResults(is)}
            />
          </div>
        </div>
        <div className='col-1'>
          <div className={`searchTypeBtn ${tipoPesquisa == tiposPesquisa.INSTITUICOES ? 'searchTypeBtnSelected' : ''}`}
              onClick={() => handleChangeTipoPesquisa(tiposPesquisa.INSTITUICOES)}>
            <FontAwesomeIcon icon={faPlaceOfWorship}/>
            <span>Instituições</span>
          </div>
        </div>
        <div className='col-1'>
          <div className={`searchTypeBtn ${tipoPesquisa == tiposPesquisa.DEMANDAS ? 'searchTypeBtnSelected' : ''}`}
                onClick={() => handleChangeTipoPesquisa(tiposPesquisa.DEMANDAS)}>
            <FontAwesomeIcon icon={faLungs}/>
            <span>Demandas</span>
          </div>
        </div>
      </div>
      {loadResults()}
    </div>
  );
}

export default SearchPage;