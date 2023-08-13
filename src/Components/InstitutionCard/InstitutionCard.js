import {faEnvelope, faLocationDot, faLungs, faPhone} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './InstitutionCard.css';

const InstitutionCard = ({item}) => {
  const loadFotos = (i) => {
    let fs = [];
    
    if(i && i.fotos && i.fotos.length > 0){
      for(let c=0; c < i.fotos.length; c++){
        fs.push(
          <div className='col'>
            <img key={i} src={i.fotos[c]} alt={i.nome}/>
          </div>
        );
      }
    }
    
    return fs;
  }

  return (
    <div className='instituicaoCard' key={item.id}>
      <div className='row'>
        <div className='col'>
          <p className='title'>{item.nome}</p>
        </div>
      </div>
      <div className='row'>
        <div className='col-8'>
          <div className='row'>
            <div className='col'>
              <p className='desc'>
                {item.resumo}
              </p>
            </div>
          </div>

          <div className='row'>
            {loadFotos(item)}
          </div>

        </div>
        <div className='col'>
          <ul>
            <li>
              <FontAwesomeIcon icon={faLocationDot}/>
              <span>{item.endereco}</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faLungs}/>
              <span>{item.qtdDemandas} demandas atendidas</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faPhone}/>
              <span>{item.telefone}</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faEnvelope}/>
              <span>{item.email}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default InstitutionCard;