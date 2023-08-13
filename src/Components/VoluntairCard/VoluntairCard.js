
import { faCalendarDays, faEnvelope, faLungs, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../Button/Button';
import DisabledButton from '../DisabledButton/DisableButton';
import './VoluntairCard.css';

const VoluntairCard = ({item}) => {

  const loadActions = () => {
    if(item.aceito && item.aceito === true){
      return (
        <div className='voluntairCardActionWrap'>
          <DisabledButton label='Aceito!'/>
          <div className='legendWrap'>
            <span>Caso ainda não tenha feito, entre em contato com o voluntário!</span>
          </div>
        </div>
      );
    } else {
      return (
        <div className='voluntairCardActionWrap'>
          <Button label='Aceitar'/>
        </div>
      );
    }
  }

  return (
    <div className='voluntairCard' key={item.id}>
      <div className='row'>
        <div className='col'>
          <p>{item.nome}</p>
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <div className='row'>
            <div className='col'>
              <p className='desc'>
                {item.resumo}
              </p>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <ul>
                <li>
                  <FontAwesomeIcon icon={faLungs}/>
                  {item.demanda}
                </li>
                <li>
                  <FontAwesomeIcon icon={faPhone}/>
                  {item.telefone}
                </li>
                <li>
                  <FontAwesomeIcon icon={faEnvelope}/>
                  {item.email}
                </li>
              </ul>

              {loadActions()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VoluntairCard;