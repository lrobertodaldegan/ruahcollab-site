import { faCalendarDays, faEnvelope, faLocationDot, faLungs, faPhone, faPlaceOfWorship, faWind } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../Button/Button';
import DisabledButton from '../DisabledButton/DisableButton';
import './SubscriptionCard.css';

const SubscriptionCard = ({item}) => {
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

  const loadStatusContent = (i) => {
    let r = <></>;

    if(i.status === 'aceito'){
      r = <>
        <Button label='VOCÊ FOI ACEITO!'/>

        <p className='desc'>
          Entre em contato com a instituição ou aguarde entrarem em contato!
        </p>
      </>
    } else if (i.status === 'pendente'){
      r = <>
        <DisabledButton label='Inscrição pendente...' />

        <p className='desc'>
          Sua inscrição foi enviada, <br/>mas ainda não foi visualizada.
        </p>
      </>
    } else {
      r = <>
        <Button label='RUAH' icon={faWind}/>

        <p className='desc'>
          Faça parte desse propósito!
        </p>
      </>
    }

    return r;
  }

  return (
    <div className='inscricoesCard' key={item.id}>
      <div className='row'>
        <div className='col'>
          <p className='title'>{item.titulo}</p>
        </div>
      </div>
      <div className='row'>
        <div className='col-8'>
          <div className='row'>
            <div className='col'>
              <p className='desc'>
                {item.desc}
              </p>
            </div>
          </div>

          <div className='row'>
            {loadFotos(item.instituicao)}
          </div>

        </div>
        <div className='col'>
          <ul>
            <li>
              <FontAwesomeIcon icon={faCalendarDays}/>
              <span>{item.recorrencia}</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faPlaceOfWorship}/>
              <span>{item.instituicao.nome}</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faLocationDot}/>
              <span>{item.instituicao.endereco}</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faLungs}/>
              <span>{item.instituicao.qtdDemandas} demandas atendidas</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faPhone}/>
              <span>{item.instituicao.telefone}</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faEnvelope}/>
              <span>{item.instituicao.email}</span>
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