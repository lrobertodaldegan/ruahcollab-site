import { useState } from "react";
import Logo from "../Logo/Logo";
import {post} from '../../Utils/restUtils';
import './SignUpInstitutionForm.css';

const SignUpInstitutionForm = ({navHandler}) => {
  const [email, setEmail] = useState('');
  const [emailContato, setEmailContato] = useState('');
  const [senha, setSenha] = useState('');
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [telefone2, setTelefone2] = useState('');
  const [resumo, setResumo] = useState('');
  const [btnLbl, setBtnLbl] = useState('Pronto!');

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if(btnLbl === 'Pronto!'){
      let body = {
        email:email,
        contactEmail: emailContato,
        name:nome,
        password:senha,
        phone:telefone,
        contactPhone:telefone2,
        resume:resumo
      }
    
      post('/auth/i/signup', body).then(response => {
        if(response.status == 201){
          setBtnLbl('Entrando...');

          post('/auth/signin', {email: email, password: senha}).then(response => {
            if(response.status == 200)
              navHandler('app');
            else
              setBtnLbl('Tente novamente.');
          });
        } else {
          setBtnLbl('Tente novamente.');
        }
      });
    }
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
            value={nome} onChange={(e) => setNome(e.target.value)}/>   
        </div>
      </div>

      <div className="row">
        <div className="col">
          <input type='text' name='telefone' placeholder="Telefone para contato"
            value={telefone} onChange={(e) => setTelefone(e.target.value)}/>   
        </div>
      </div>

      <div className="row">
        <div className="col">
          <input type='text' name='telefone2' placeholder="Outro telefone para contato (opcional)"
            value={telefone2} onChange={(e) => setTelefone2(e.target.value)}/>   
        </div>
      </div>

      <div className="row">
        <div className="col">
          <input type='text' name='email-contato' placeholder="E-mail para contato do voluntariado"
            value={emailContato} onChange={(e) => setEmailContato(e.target.value)}/>   
        </div>
      </div>

      <div className="row">
        <div className="col">
          <input type='text' name='email' placeholder="E-mail para acessar o app"
            value={email} onChange={(e) => setEmail(e.target.value)}/>   
        </div>
      </div>
      
      <div className="row">
        <div className="col">
          <input type='password' name='senha' placeholder="Senha para acessar o app"
            value={senha} onChange={(e) => setSenha(e.target.value)}/> 
        </div>
      </div>

      <div className="row">
        <div className="col">
          <textarea placeholder="Fale mais sobre a instituição" 
              onChange={(e) => setResumo(e.target.value)} value={resumo} />
        </div>
      </div>

      <div className="row">
        <div className="col">
          <input type='submit' value={btnLbl}/>    
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