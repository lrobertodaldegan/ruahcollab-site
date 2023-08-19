import {useState} from 'react';
import Modal from '../../Components/Modal/Modal';
import LoginForm from './LoginForm';
import QuemSomos from './QuemSomos';
import SignUpForm from './SignUpForm';
import SignUpInstitutionForm from './SignUpInstitutionForm';
import SignUpOptions from './SignUpOptions';
import './HomeMenu.css';

const menus = {
  quemSomos:'Quem somos',
  instituicoes:'App para instituições',
  voluntarios:'App para Voluntários',
  criarConta:'Criar uma conta',
  login:'Login',
}

const HomeMenu = ({navHandler}) => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(<></>);

  const handleModal = (action) => {
    let content = null;

    if(menus.quemSomos === action){
      content = <QuemSomos />
    } else if(menus.criarConta === action){
      content = <SignUpOptions handleVoluntario={() => setModalContent(<SignUpForm navHandler={navHandler}/>)}
                    handleInstituicao={()=> setModalContent(<SignUpInstitutionForm navHandler={navHandler}/>)}/>
    } else if(menus.login === action){
      content = <LoginForm navHandler={navHandler}/>
    }

    setModalContent(content);
    
    setShowModal(!showModal);
  }

  const loadModal = () => {
    return showModal === false ? <></>
                              : <Modal content={modalContent}
                                    onClose={() => setShowModal(!showModal)}
                                />;
  }

  return (
    <>
      {loadModal()}
    
      <hr className='hr'/>

      <div className='row homemenu-wrap pc'>
        <div className='col'>
          <div onClick={() => handleModal(menus.quemSomos)}>
            <a href='#'>{menus.quemSomos}</a>
          </div>
        </div>
        <div className='col'>
        <a href='#'>{menus.instituicoes}</a>
        </div>
        <div className='col'>
          <a href='#'>{menus.voluntarios}</a>
        </div>
        <div className='col'>
          <div onClick={() => handleModal(menus.criarConta)}>
            <a href='#'>{menus.criarConta}</a>
          </div>
        </div>
        <div className='col'>
          <div onClick={() => handleModal(menus.login)}>
            <a href='#'>{menus.login}</a>
          </div>
        </div>
      </div>

      <div className='homemenu-wrap-m mobile'>
        <div className='row'>
          <div onClick={() => handleModal(menus.quemSomos)}>
            <a href='#'>{menus.quemSomos}</a>
          </div>
        </div>
        <div className='row'>
        <a href='#'>{menus.instituicoes}</a>
        </div>
        <div className='row'>
          <a href='#'>{menus.voluntarios}</a>
        </div>
        <div className='row'>
          <div onClick={() => handleModal(menus.criarConta)}>
            <a href='#'>{menus.criarConta}</a>
          </div>
        </div>
        <div className='row'>
          <div onClick={() => handleModal(menus.login)}>
            <a href='#'>{menus.login}</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeMenu;