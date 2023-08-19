
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Toast.css';

const Toast = ({label='Ok!', onClose=()=>null}) => {

  return (
    <div className='toast-wrap'>
      <div className='row'>
        <div className='offset-11 col-1 toast-close'>
          <FontAwesomeIcon icon={faClose} onClick={() => onClose()}/>
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <p>{label}</p>
        </div>
      </div>
    </div>
  );
}

export default Toast;