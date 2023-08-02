import {useState} from 'react';
import { Link } from 'react-router-dom';
import Modal from '../../Components/Modal/Modal';
import './HomeMenu.css';
import LoginForm from './LoginForm';
import QuemSomos from './QuemSomos';
import SignUpForm from './SignUpForm';

const menus = {
  quemSomos:'Quem somos',
  instituicoes:'App para instituições',
  voluntarios:'App para Voluntários',
  criarConta:'Criar uma conta',
  login:'Login',
}

const HomeMenu = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(<></>);

  const handleModal = (action) => {
    let content = null;

    if(menus.quemSomos === action){
      content = <QuemSomos />
    } else if(menus.criarConta === action){
      content = <SignUpForm />
    } else if(menus.login === action){
      content = <LoginForm />
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

      <div className='row homemenu-wrap'>
        <div className='col'>
          <div onClick={() => handleModal(menus.quemSomos)}>
            <a href='#'>{menus.quemSomos}</a>
          </div>
        </div>
        <div className='col'>
          <Link to='/'>{menus.instituicoes}</Link>
        </div>
        <div className='col'>
          <Link to='/'>{menus.voluntarios}</Link>
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
    </>
  );
}

export default HomeMenu;