import {faEnvelope, faLocationDot, faLungs, faPhone} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './InstitutionCard.css';

const InstitutionCard = ({item}) => {
  const loadFotos = (i) => {
    let fs = [];
    
    if(i && i.photos && i.photos.length > 0){
      for(let c=0; c < i.photos.length; c++){
        fs.push(
          <div className='col'>
            <img key={`${i}_${new Date().getMilliseconds()}`} src={i.photos[c]} alt={i.nome}/>
          </div>
        );
      }
    }
    
    return fs;
  }

  return (
    <div className='instituicaoCard' key={item.name}>
      <div className='row'>
        <div className='col'>
          <p className='title'>{item.name}</p>
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
              <FontAwesomeIcon icon={faLungs}/>
              <span><a href={item.site} target='_blank'>Site da instituição</a></span>
            </li>
            <li>
              <FontAwesomeIcon icon={faLocationDot}/>
              <span>{`${item.address} - CEP/ZIPCODE: ${item.zipcode}`}</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faPhone}/>
              <span>{
                item.contactPhone
                  ? item.contactPhone
                  : item.phone
              }</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faEnvelope}/>
              <span>{
                item.contactEmail
                  ? item.contactEmail
                  : item.email
              }</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default InstitutionCard;