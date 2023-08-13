import { useState } from "react";
import Logo from "../Logo/Logo";
import './LoginForm.css';

const LoginForm = ({navHandler}) => {
const [email, setEmail] = useState(null);
const [senha, setSenha] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(event.target);

    navHandler('app');
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
            value={email}/>   
        </div>
      </div>
      
      <div className="row">
        <div className="col">
          <input type='password' name='senha' placeholder="Sua senha"
            value={senha}/> 
        </div>
      </div>
         
      <div className="row">
        <div className="col">
          <input type='submit' value='Login'/>    
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