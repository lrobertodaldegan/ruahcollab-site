import {useState} from 'react';
import { faEnvelope, faLungs, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../Button/Button';
import DisabledButton from '../DisabledButton/DisableButton';
import {put} from '../../Utils/restUtils';
import './VoluntairCard.css';

const VoluntairCard = ({item}) => {
  const [status, setStatus] = useState(item.status);
  const [acceptLbl, setAcceptLbl] = useState('Aceitar');

  const handleAccept = () => {
    if(acceptLbl === 'Aceitar'){
      put(`/subscription/${item.id}`).then(response => {
        if(response.status == 200){
          setStatus('aceito');
          setAcceptLbl('Aceito!');
        }
      });
    }
  }

  const loadActions = () => {
    if(status && status === 'aceito'){
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
          <Button label='Aceitar' onClick={() => handleAccept()}/>
        </div>
      );
    }
  }

  return (
    <div className='voluntairCard' key={item.id}>
      <div className='row'>
        <div className='col'>
          <p>{item.voluntair.name}</p>
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <div className='row'>
            <div className='col'>
              <p className='desc'>
                {item.voluntair.resume}
              </p>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <ul>
                <li>
                  <FontAwesomeIcon icon={faLungs}/>
                  {item.demand}
                </li>
                <li>
                  <FontAwesomeIcon icon={faPhone}/>
                  {item.voluntair.phone}
                </li>
                <li>
                  <FontAwesomeIcon icon={faEnvelope}/>
                  {item.voluntair.email}
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