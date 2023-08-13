import Logo from '../Logo/Logo';
import Button from '../Button/Button';
import './SignUpOptions.css';

const SignUpOptions = ({handleVoluntario=()=>null, handleInstituicao=()=>null}) => {
  return (
    <div className='signUpOptions'>
      <div className='row'>
        <div className='col'>
          <Logo />
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <p>Quero criar uma conta para:</p>
        </div>
      </div>

      <div className='row'>
        <div className='col'>
          <Button label='Voluntário' 
              onClick={() => handleVoluntario()}/>
        </div>
      </div>

      <div className='row'>
        <div className='col'>
          <Button label='Institucional'
              onClick={() => handleInstituicao()}/>
        </div>
      </div>
    </div>
  );
}

export default SignUpOptions;