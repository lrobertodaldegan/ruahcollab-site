import HomeMenu from '../../Components/HomeMenu/HomeMenu';
import Logo from '../../Components/Logo/Logo';
import './HomePage.css';

const HomePage = ({navHandler}) => {
  return (
    <>
      <div className='row hp-wrap'>
        <div className='col'>
          <div className='row'>
            <div className='col'>
              <Logo />
            </div>
          </div>

          <div className='row'>
            <div className='col'>
              <p>Gerando a vida de Cristo através da colaboração</p>
            </div>
          </div>
        </div>
      </div>

      <HomeMenu navHandler={navHandler}/>
    </>
  );
}

export default HomePage;