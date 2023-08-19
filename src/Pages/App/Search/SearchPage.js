import { useState, useEffect } from 'react';
import SubscriptionCard from '../../../Components/SubscriptionCard/SubscriptionCard';
import InstitutionCard from '../../../Components/InstitutionCard/InstitutionCard';
import './SearchPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLungs, faPlaceOfWorship, faSearch } from '@fortawesome/free-solid-svg-icons';
import {get} from '../../../Utils/restUtils';

const SearchPage = () => {
  const [termoPesquisa, setTermoPesquisa] = useState('');
  const [tipoPesquisa, setTipoPesquisa] = useState('a');
  const [demands, setDemands] = useState([]);
  const [institutions, setInstitutions] = useState([]);

  useEffect(() => {
    search();
  }, [tipoPesquisa]);

  const search = () => {
    setDemands([]);
    setInstitutions([]);

    let url = '/demand';

    if(termoPesquisa && termoPesquisa.length > 2)
      url = url + `?title=${termoPesquisa}`;

    get(url).then(response => {
      if(response.status === 200){
        setDemands(response.data.demands);
        setInstitutions(response.data.institutions);
      }
    });
  }

  const renderResults = () => {
    let components = [];

    if(demands && institutions){
    if(tipoPesquisa === 'a' || tipoPesquisa === 'd'){
      demands.forEach(d => {
        let inst = institutions.find(i => `${i._id}` === `${d.institutionId}`);

        if(inst)
          d.institution = inst;

        components.push(<SubscriptionCard item={{status:d.status, demand:d}}/>);
      });
    }

    if(tipoPesquisa === 'a' || tipoPesquisa === 'i')
      institutions.forEach(i => components.push(<InstitutionCard item={i}/>));

    } else {
      components.push(<span>Se encontrarmos algo, o resultado da pesquisa aparecerá aqui. Caso contrário, tente novamente.</span>);
    }

    return components;
  }

  const handleChangeTipoPesquisa = (tipoP) => {
    if(tipoPesquisa === tipoP)
      setTipoPesquisa('a');
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
                onClick={() => search()}
            />
          </div>
        </div>
        <div className='col-1'>
          <div className={`searchTypeBtn ${tipoPesquisa === 'i' ? 'searchTypeBtnSelected' : ''}`}
              onClick={() => handleChangeTipoPesquisa('i')}>
            <FontAwesomeIcon icon={faPlaceOfWorship}/>
            <span>Instituições</span>
          </div>
        </div>
        <div className='col-1'>
          <div className={`searchTypeBtn ${tipoPesquisa === 'd' ? 'searchTypeBtnSelected' : ''}`}
                onClick={() => handleChangeTipoPesquisa('d')}>
            <FontAwesomeIcon icon={faLungs}/>
            <span>Demandas</span>
          </div>
        </div>
      </div>
      {renderResults()}
    </div>
  );
}

export default SearchPage;