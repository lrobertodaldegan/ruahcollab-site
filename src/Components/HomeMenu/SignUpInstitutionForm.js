import { useState } from "react";
import Logo from "../Logo/Logo";
import './SignUpInstitutionForm.css';

const SignUpInstitutionForm = () => {
  const [email, setEmail] = useState('');
  const [emailContato, setEmailContato] = useState('');
  const [senha, setSenha] = useState('');
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [telefone2, setTelefone2] = useState('');
  const [resumo, setResumo] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(event.target);
  }

  return (
    <form className='signUpInstitutionForm' onSubmit={e => handleSubmit(e)}>
      <div className="row">
        <div className="col">
          <Logo />
        </div>
      </div>

      <div className="row">
        <div className="col">
          <p>Nos conte sobre a instituição:</p>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <input type='text' name='nome' placeholder="Nome da instituição"
            value={nome}/>   
        </div>
      </div>

      <div className="row">
        <div className="col">
          <input type='text' name='telefone' placeholder="Telefone para contato"
            value={telefone}/>   
        </div>
      </div>

      <div className="row">
        <div className="col">
          <input type='text' name='telefone2' placeholder="Outro telefone para contato (opcional)"
            value={telefone2}/>   
        </div>
      </div>

      <div className="row">
        <div className="col">
          <input type='text' name='email-contato' placeholder="E-mail para contato do voluntariado"
            value={emailContato}/>   
        </div>
      </div>

      <div className="row">
        <div className="col">
          <input type='text' name='email' placeholder="E-mail para acessar o app"
            value={email}/>   
        </div>
      </div>
      
      <div className="row">
        <div className="col">
          <input type='password' name='senha' placeholder="Senha para acessar o app"
            value={senha}/> 
        </div>
      </div>

      <div className="row">
        <div className="col">
          <textarea placeholder="Fale mais sobre a instituição">
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

export default SignUpInstitutionForm;