import { useState } from "react";
import Logo from "../Logo/Logo";
import { post } from '../../Utils/restUtils';
import './LoginForm.css';


const LoginForm = ({navHandler}) => {
const [email, setEmail] = useState('');
const [senha, setSenha] = useState('');
const [btnLbl, setBtnLbl] = useState('Login');

  const handleSubmit = (event) => {
    event.preventDefault();

    if(btnLbl === 'Login'){
      setBtnLbl('Entrando...');

      post('/auth/signin', {email: email, password: senha}).then(response => {
        if(response.status == 200){
          navHandler('app');
        } else {
          setBtnLbl('Tente novamente!');
        }
      })
      .catch(err => setBtnLbl('Tente novamente!'));
    }
  }

  return (
    <form className='loginForm' onSubmit={e => handleSubmit(e)}>
      <div className="row">
        <div className="col">
          <Logo />
        </div>
      </div>

      <div className="row">
        <div className="col">
          <input type='text' name='email' placeholder="Seu e-mail"
            value={email} onChange={(e) => setEmail(e.target.value)}/>   
        </div>
      </div>
      
      <div className="row">
        <div className="col">
          <input type='password' name='senha' placeholder="Sua senha"
            value={senha} onChange={(e) => setSenha(e.target.value)}/> 
        </div>
      </div>
         
      <div className="row">
        <div className="col">
          <input type='submit' value={btnLbl}/>    
        </div>
      </div>

      <div className="row">
        <div className="col">
          <a href="#">Esqueci a minha senha</a>  
        </div>
      </div>
    </form>
  );
}

export default LoginForm;