import {useState, useEffect} from'react';
import Toast from '../../../Components/Toast/Toast';
import {get, put} from '../../../Utils/restUtils';

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
  const [endereco, setEndereco] = useState('');
  const [site, setSite] = useState('');
  const [cep, setCep] = useState('');
  const [fotos, setFotos] = useState([]);
  const [error, setError] = useState({});
  const [btnLbl, setBtnLbl] = useState('Salvar');
  
  useEffect(() => {
    get('/user').then(response => {
      if(response.status == 200){
        let user = response.data;

        setEmail(user.email);
        setEmailContato(user.contactEmail);
        setTelefone(user.phone);
        setTelefone2(user.contactPhone);
        setResumo(user.resume);
        setNome(user.name);
        setEndereco(user.address);
        setCep(user.zipcode);
        setSite(user.site);
        setProfileType(user.role === 'institution' ? 'i' : 'v');

        let fs = [];

        for(let i=0;i<user.photos.length;i++){
          fs.push(user.photos[i]);
        }

        setFotos(fs);
      } else {
        setError({error:true, message:'Houve um erro ao tentar carregar o perfil! Tente novamente!'});
      }
    });
  }, []);

  const handleFileUpload = async (event) => {
    let max = event.target.files.length > 1 ? 1 : event.target.files.length;

    let base64Photos = [];

    for(let i = 0; i < max; i++){
      let reader = new FileReader();
      reader.onload = (e) => {base64Photos.push(e.target.result); setFotos(base64Photos)};
      reader.readAsDataURL(event.target.files[i]);
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    let body = null;

    body = {
      email:email,
      contactEmail:emailContato,
      phone:telefone,
      contactPhone:telefone2,
      resume:resumo,
      name:nome,
      address:endereco,
      site:site,
      zipcode:cep
    }

    if(senha && senha.length > 1)
      body.password = senha;

    put('/user', body).then(response => {
      if(response.status != 200){
        setError({error:true, message:'Houve um problema ao tentar salvar os dados! Tente novamente!'});
        setBtnLbl('Tente novamente!');
      } else {
        if(fotos && fotos.length > 0){
          put('/user', {photos:fotos}).then(response => {
            if(response.status != 200){
              setError({error:true, message:'Houve um problema ao tentar enviar as fotos! Tente novamente!'});
              setBtnLbl('Tente novamente!');
            } else {
              setError({error:false, message:'Dados salvos com sucesso!'});
              setBtnLbl('Salvo!');
            }
          });
        } else {
          setError({error:false, message:'Dados salvos com sucesso!'});
          setBtnLbl('Salvo!');
        }
      }
    });
  }

  const loadFotos = (clas) => {
    if(fotos && fotos.length > 0){
      let fs = [];

      let max = fotos.length > 1 ? 1 : fotos.length;

      for(let i = 0; i < max; i++){
        fs.push(
          <div className="col">
            <img src={fotos[i]} className={clas} alt='instituição'/>
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
                  value={nome} onChange={(e)=> setNome(e.target.value)} alt='Nome da instituicao'/>   
              </div>
            </div>

            <div className="row">
              <div className="col">
                <input type='text' name='telefone' placeholder="Telefone para contato"
                  value={telefone} onChange={(e)=> setTelefone(e.target.value)}/>   
              </div>
            </div>

            <div className="row">
              <div className="col">
                <input type='text' name='telefone2' placeholder="Outro telefone para contato (opcional)"
                  value={telefone2} onChange={(e)=> setTelefone2(e.target.value)}/>   
              </div>
            </div>

            <div className="row">
              <div className="col">
                <input type='text' name='email-contato' placeholder="E-mail para contato do voluntariado"
                  value={emailContato} onChange={(e)=> setEmailContato(e.target.value)}/>   
              </div>
            </div>

            <div className="row">
              <div className="col">
                <input type='text' name='email' placeholder="E-mail para acessar o app"
                  value={email} onChange={(e)=> setEmail(e.target.value)}/>   
              </div>
            </div>
            
            <div className="row">
              <div className="col">
                <input type='password' name='senha' placeholder="Nova senha para acessar o app"
                  value={senha} onChange={(e)=> setSenha(e.target.value)}/> 
              </div>
            </div>

            <div className="row">
              <div className="col">
                <input type='text' name='endereco' placeholder="Endereço da instituição"
                  value={endereco} onChange={(e)=> setEndereco(e.target.value)}/> 
              </div>
            </div>

            <div className="row">
              <div className="col">
                <input type='text' name='cep' placeholder="CEP"
                  value={cep} onChange={(e)=> setCep(e.target.value)}/> 
              </div>
            </div>

            <div className="row">
              <div className="col">
                <input type='url' name='site' placeholder="Site da instituição"
                  value={site} onChange={(e)=> setSite(e.target.value)}/> 
              </div>
            </div>

            <div className="row">
              <div className="col">
                <textarea placeholder="Fale mais sobre a instituição" 
                    value={resumo} onChange={(e) => setResumo(e.target.value)}/>
              </div>
            </div>

            <div className="row mobile">
              <div className="col">
                <label className='inputFileLabel' htmlFor='fotos_m'>
                  Clique para adicionar ou alterar a foto da sua instituição
                </label>
                <input type='file' name='fotos' id='fotos_m' multiple onChange={(e) => handleFileUpload(e)}/> 
              </div>
            </div>
            
            <div className='mobile'>
              {loadFotos('mobile')}
            </div>

            <div className="row">
              <div className="col">
                <input type='submit' value={btnLbl}/>    
              </div>
            </div>
          </div>
          <div className="col-6 pc">
            <div className="row">
              <div className="col">
                <label className='inputFileLabel' htmlFor='fotos_p'>
                  Clique para adicionar ou alterar a foto da sua instituição
                </label>
                <input type='file' name='fotos' id='fotos_p' multiple onChange={(e) => handleFileUpload(e)}/> 
              </div>
            </div>
            
            <div className='pc'>
              {loadFotos('pc')}
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <>
          <div className="row">
            <div className="col">
              <input type='text' name='nome' placeholder="Seu nome" value={nome} 
                  onChange={(e)=> setNome(e.target.value)}/>   
            </div>
          </div>
    
          <div className="row">
            <div className="col">
              <input type='text' name='email' placeholder="Seu e-mail" value={email} 
                  onChange={(e)=> setEmail(e.target.value)}/>   
            </div>
          </div>
    
          <div className="row">
            <div className="col">
              <input type='text' name='telefone' placeholder="Seu telefone para contato" value={telefone} 
                  onChange={(e)=> setTelefone(e.target.value)}/>   
            </div>
          </div>
          
          <div className="row">
            <div className="col">
              <input type='password' name='senha' placeholder="Sua nova senha" value={senha} 
                  onChange={(e)=> setSenha(e.target.value)}/> 
            </div>
          </div>
    
          <div className="row">
            <div className="col">
              <textarea placeholder="Resumo" value={resumo} onChange={(e) => setResumo(e.target.value)}/>
            </div>
          </div>
    
          <div className="row">
            <div className="col">
              <input type='submit' value={btnLbl}/>    
            </div>
          </div>
        </>
      );
    }
  }

  const loadToast = () => {
    if(error && error.message) {
      return <Toast label={error.message} onClose={() => setError({})}/>
    } else {
      return <></>
    }
  }

  return (
    <div className="profilePage">
      {loadToast()}
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