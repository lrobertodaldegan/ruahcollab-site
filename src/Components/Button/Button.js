import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Button.css';

const Button = ({label, icon=null, onClick=()=>null}) => {
  const loadIcon = () => {
    if(icon && icon != null)
      return <FontAwesomeIcon icon={icon} size={14}/>;

    return <></>;
  }
  
  return (
    <button className='btn' onClick={() => onClick()}>
      {label}
      {loadIcon()}
    </button>
  );
}

export default Button;