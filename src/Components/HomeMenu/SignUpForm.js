import { useState } from "react";
import Logo from "../Logo/Logo";
import './SignUpForm.css';

const SignUpForm = () => {
  const [email, setEmail] = useState(null);
  const [senha, setSenha] = useState(null);
  const [nome, setNome] = useState(null);
  const [telefone, setTelefone] = useState(null);
  const [resumo, setResumo] = useState(null);

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
          <p>Nos conte sobre você!</p>
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
          <textarea value={resumo}></textarea> 
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