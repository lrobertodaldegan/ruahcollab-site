
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Modal.css';

const Modal = ({content=<></>, onClose=()=>null}) => {

  return (
    <div className='modal-wrap'>
      <div className='row'>
        <div className='offset-11 col-1 modal-close'>
          <FontAwesomeIcon icon={faClose} onClick={() => onClose()}/>
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          {content}
        </div>
      </div>
    </div>
  );
}

export default Modal;