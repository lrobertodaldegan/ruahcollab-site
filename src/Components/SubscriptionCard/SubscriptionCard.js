import {useState, useEffect} from 'react';
import { faCalendarDays, faEnvelope, faLocationDot, faLungs, faPhone, faPlaceOfWorship, faWind } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../Button/Button';
import DisabledButton from '../DisabledButton/DisableButton';
import './SubscriptionCard.css';
import {post, del} from '../../Utils/restUtils';

const LBL_CANCEL = 'Cancelar sua inscricao';

const SubscriptionCard = ({item, cancellable=false}) => {
  const [status, setStatus] = useState('');
  const [cancelLbl, setCancelLbl] = useState(LBL_CANCEL);

  useEffect(() => {
    setStatus(item.status);
  }, []);

  const loadFotos = (i) => {
    let fs = [];
    
    if(i && i.photos && i.photos.length > 0){
      for(let c=0; c < i.photos.length; c++){
        fs.push(
          <div className='col'>
            <img key={i} src={i.photos[c]} alt={i.nome}/>
          </div>
        );
      }
    }
    
    return fs;
  }

  const handleSubmit = (i) => {
    post('/subscription', {demandId:i.demand.id}).then(response => {
      if(response.status == 201)
        setStatus('pendente');
    });
  }

  const handleCancel = () => {
    if(cancellable && cancelLbl === LBL_CANCEL){
      del(`/subscription/${item.id}`).then(response => {
        if(response.status == 200)
          setCancelLbl('Cancelamento solicitado');
      });
    }
  }

  const loadStatusContent = (i) => {
    let r = <></>;

    if(status === 'aceito'){
      r = <>
        <Button label='VOCÊ FOI ACEITO!'/>

        <p className='desc'>
          Entre em contato com a instituição ou aguarde entrarem em contato!
        </p>
      </>
    } else if (status === 'pendente'){
      let cancelOpt = cancellable 
                        ? <p className='desc cancel' onClick={() => handleCancel()}>
                            {cancelLbl}
                          </p>
                        : <></>;

      r = <>
        <DisabledButton label='Inscrição pendente...' />

        <p className='desc'>
          Sua inscrição foi enviada, <br/>mas ainda não foi visualizada.
        </p>


        {cancelOpt}
      </>
    } else {
      if(i.demand.subscriptions < i.demand.maxSubscriptions){
        r = <>
          <Button label='RUAH' icon={faWind} onClick={() => handleSubmit(i)}/>

          <p className='desc'>
            Faça parte desse propósito!
          </p>
        </>
      } else {
        r = <DisabledButton label='Inscrições encerradas' />
      }
    }

    return r;
  }

  return (
    <div className='inscricoesCard' key={item.id}>
      <div className='row'>
        <div className='col'>
          <p className='title'>{item.demand.title}</p>
        </div>
      </div>
      <div className='row'>
        <div className='col-8'>
          <div className='row'>
            <div className='col'>
              <p className='desc'>
                {item.demand.resume}
              </p>
            </div>
          </div>

          <div className='row'>
            {loadFotos(item.demand.institution)}
          </div>

        </div>
        <div className='col'>
          <ul>
            <li>
              <FontAwesomeIcon icon={faCalendarDays}/>
              <span>{item.demand.recurrence}</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faPlaceOfWorship}/>
              <span>{item.demand.institution.name}</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faLungs}/>
              <span><a href={item.demand.institution.site} target='_blank'>Site da instituição</a></span>
            </li>
            <li>
              <FontAwesomeIcon icon={faLocationDot}/>
              <span>{`${item.demand.institution.address} - CEP/ZIPCODE: ${item.demand.institution.zipcode}`}</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faPhone}/>
              <span>{
                item.demand.institution.contactPhone 
                    ? item.demand.institution.contactPhone
                    : item.demand.institution.phone
              }</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faEnvelope}/>
              <span>{
                item.demand.institution.contactEmail
                    ? item.demand.institution.contactEmail
                    : item.demand.institution.email
              }</span>
            </li>
          </ul>

          <div className='status'>
            {loadStatusContent(item)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubscriptionCard;