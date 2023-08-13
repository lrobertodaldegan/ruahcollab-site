import { useState } from "react";
import Logo from "../Logo/Logo";
import './SignUpForm.css';

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [resumo, setResumo] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(event.target);
  }

  return (
    <form className='signUpForm' onSubmit={e => handleSubmit(e)}>
      <div className="row">
        <div className="col">
          <Logo />
        </div>
      </div>

      <div className="row">
        <div className="col">
          <p>Nos conte sobre você:</p>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <input type='text' name='nome' placeholder="Seu nome"
            value={nome}/>   
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
          <input type='text' name='telefone' placeholder="Seu telefone para contato"
            value={telefone}/>   
        </div>
      </div>
      
      <div className="row">
        <div className="col">
          <input type='password' name='senha' placeholder="Sua nova senha"
            value={senha}/> 
        </div>
      </div>

      <div className="row">
        <div className="col">
          <textarea placeholder="Fale mais sobre você (profissão, experiência, etc)">
            {resumo}
          </textarea> 
        </div>
      </div>

      <div className="row">
        <div className="col">
          <input type='submit' value='Pronto!'/>    
        </div>
      </div>

      <div className="row">
        <div className="col">
          <p>Não compartilharemos seus dados com terceiros!<br/>Fique tranquilo!</p>
        </div>
      </div>
    </form>
  );
}

export default SignUpForm;