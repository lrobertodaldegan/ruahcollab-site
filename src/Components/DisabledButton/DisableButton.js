import './DisableButton.css';

const Button = ({label, onClick=()=>null}) => {
  return (
    <button className='btn dis-btn' onClick={() => onClick()}>
      {label}
    </button>
  );
}

export default Button;