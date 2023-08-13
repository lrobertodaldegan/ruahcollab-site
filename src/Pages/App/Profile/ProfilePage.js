import {useState, useEffect} from'react';

import './ProfilePage.css';

const ProfilePage = () => {
  const [profileType, setProfileType] = useState('v');
  const [email, setEmail] = useState('');
  const [emailContato, setEmailContato] = useState('');
  const [senha, setSenha] = useState('');
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [telefone2, setTelefone2] = useState('');
  const [resumo, setResumo] = useState('');
  const [fotos, setFotos] = useState([]);
  
  useEffect(() => {
    setProfileType('i');//TODO buscar o profile type a partir do jwt. Preencher tbm demais informações
  }, []);

  const handleFileUpload = (event) => {
    let fs = [];

    let max = event.target.files.length > 3 ? 3 : event.target.files.length;

    for(let i = 0; i < max; i++)
      fs.push();

    console.log(event.target.files);
    
    setFotos(event.target.files);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(event.target);
  }

  const loadFotos = (clas) => {
    if(fotos && fotos.length > 0){
      let fs = [];

      let max = fotos.length > 3 ? 3 : fotos.length;

      for(let i = 0; i < max; i++){
        let url = URL.createObjectURL(fotos[i]);

        fs.push(
          <div className="col">
            <img key={`${i}_${url}_${clas}`} id={`${i}_${url}_${clas}`} src={url} className={clas} alt='instituição'/>
          </div>
        );
      }

      return <div className="row fotosRow">{fs}</div>;
    }

    return <></>;
  }

  const loadContent = () => {
    if(profileType === 'i'){
      return (
        <div className="row">
          <div className="col-4">
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
                <textarea placeholder="Fale mais sobre a instituição" value={resumo}/>
              </div>
            </div>

            <div className="row mobile">
              <div className="col">
                <label className='inputFileLabel' htmlFor='fotos_m'>
                  Clique para adicionar ou alterar as fotos da sua instituição
                  <br/>(Selecione até 3 fotos)
                </label>
                <input type='file' name='fotos' id='fotos_m' multiple onChange={(e) => handleFileUpload(e)}/> 
              </div>
            </div>
            
            <div className='mobile'>
              {loadFotos('mobile')}
            </div>

            <div className="row">
              <div className="col">
                <input type='submit' value='Salvar'/>    
              </div>
            </div>
          </div>
          <div className="col-6 pc">
            <div className="row">
              <div className="col">
                <label className='inputFileLabel' htmlFor='fotos_p'>
                  Clique para adicionar ou alterar as fotos da sua instituição
                  <br/>(Selecione até 3 fotos)
                </label>
                <input type='file' name='fotos' id='fotos_p' multiple onChange={(e) => handleFileUpload(e)}/> 
              </div>
            </div>
            
            <div className='pc'>
              
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <>
          <div className="row">
            <div className="col">
              <input type='text' name='nome' placeholder="Seu nome" value={nome}/>   
            </div>
          </div>
    
          <div className="row">
            <div className="col">
              <input type='text' name='email' placeholder="Seu e-mail" value={email}/>   
            </div>
          </div>
    
          <div className="row">
            <div className="col">
              <input type='text' name='telefone' placeholder="Seu telefone para contato" value={telefone}/>   
            </div>
          </div>
          
          <div className="row">
            <div className="col">
              <input type='password' name='senha' placeholder="Sua nova senha" value={senha}/> 
            </div>
          </div>
    
          <div className="row">
            <div className="col">
              <textarea placeholder="Resumo">
                {resumo}
              </textarea> 
            </div>
          </div>
    
          <div className="row">
            <div className="col">
              <input type='submit' value='Salvar'/>    
            </div>
          </div>
        </>
      );
    }
  }

  return (
    <div className="profilePage">
      <div className="row">
        <div className="col">
          <form className='edtProfileForm' onSubmit={e => handleSubmit(e)}>  
            {loadContent()}
          </form>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;