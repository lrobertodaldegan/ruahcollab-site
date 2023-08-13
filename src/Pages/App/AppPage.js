import {useState, useEffect} from 'react';
import Logo from '../../Components/Logo/Logo';
import './AppPage.css';
import DemandsPage from './Demands/DemandsPage';
import ProfilePage from './Profile/ProfilePage';
import SearchPage from './Search/SearchPage';
import SubscriptionsPage from './Subscriptions/SubscriptionsPage';
import VoltairPage from './Voluntair/VoluntairPage';

const menus = [
  {type:'a', id:'ep', label:'Editar Perfil', content:<ProfilePage/>},
  {type:'v', id:'pesq', label:'Pesquisar', content:<SearchPage />},
  {type:'v', id:'insc', label:'Minhas inscrições', content:<SubscriptionsPage />},
  {type:'i', id:'dem', label:'Demandas', content:<DemandsPage/>},
  {type:'i', id:'vol', label:'Voluntários', content:<VoltairPage/>},
  {type:'a', id:'sair', label:'Sair', content:<></>},
];

const AppPage = ({navHandler=()=>null}) => {
  const [profileType, setProfileType] = useState('v');
  const [content, setContent] = useState(menus[0].content);
  const [contentTitle, setContentTitle] = useState(menus[0].label);

  useEffect(() => {
    setProfileType('i');//TODO buscar o profile type a partir do jwt. Preencher tbm demais informações
  }, []);

  const loadMenus = () => {
    let itens = [];
  
    const handleClick = (m) => {
      if(m.id === 'sair'){
        //TODO LOGOFF
        //window.location.replace('/');
        navHandler('/');
      } else {
        setContent(m.content);
        setContentTitle(m.label);
      }
    }

    menus.map(m => {
      if(m.type === 'a' || m.type === profileType){
        itens.push(
          <div className='row'>
            <div className='col'>
              <p className={`${m.id} menuItem ${contentTitle === m.label ? 'menuItemSelected' : ''}`} 
                  onClick={() => handleClick(m)}>
                {m.label}
              </p>
            </div>
          </div>
        )
      }
    });

    return itens;
  }

  return (
    <div className='appPage'>
      <div className='row'>
        <div className='col-2'>
          <div className='appPageMenu'>
            <div className='row'>
              <div className='col'>
                <Logo />
              </div>
            </div>
            {loadMenus()}
          </div>
        </div>
        <div className='col-10 appPageContent'>
          <div className='row'>
            <div className='col'>
              <h5 className='appPageTitle'>{contentTitle}</h5>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              {content}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppPage;