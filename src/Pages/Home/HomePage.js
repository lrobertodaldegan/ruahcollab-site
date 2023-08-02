import HomeMenu from '../../Components/HomeMenu/HomeMenu';
import Logo from '../../Components/Logo/Logo';
import './HomePage.css';

const HomePage = () => {
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
              <p>Frase de efeito</p>
            </div>
          </div>
        </div>
      </div>

      <HomeMenu />
    </>
  );
}

export default HomePage;