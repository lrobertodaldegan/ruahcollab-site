import { useState } from "react";
import Logo from "../Logo/Logo";
import {post} from '../../Utils/restUtils';
import './SignUpForm.css';

const SignUpForm = ({navHandler}) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [resumo, setResumo] = useState('');
  const [btnLbl, setBtnLbl] = useState('Pronto!');

  const handleSubmit = (event) => {
    event.preventDefault();

    if(btnLbl === 'Pronto!'){
      let body = {
        email:email,
        name:nome,
        password:senha,
        phone:telefone,
        resume:resumo
      }
    
      post('/auth/v/signup', body).then(response => {
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
            value={nome} onChange={(e) => setNome(e.target.value)}/>   
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
          <input type='text' name='telefone' placeholder="Seu telefone para contato"
            value={telefone} onChange={(e) => setTelefone(e.target.value)}/>   
        </div>
      </div>
      
      <div className="row">
        <div className="col">
          <input type='password' name='senha' placeholder="Sua nova senha"
            value={senha} onChange={(e) => setSenha(e.target.value)}/> 
        </div>
      </div>

      <div className="row">
        <div className="col">
          <textarea placeholder="Fale mais sobre você (profissão, experiência, etc)"
              value={resumo} onChange={(e) => setResumo(e.target.value)}
          />
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

export default SignUpForm;