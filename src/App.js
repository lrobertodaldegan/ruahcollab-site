import {useState, useEffect} from 'react';
import HomePage from "./Pages/Home/HomePage";
import AppPage from "./Pages/App/AppPage";
import NotFoundPage from "./Pages/NotFound/NotFoundPage";
import './App.css';
import './Assets/fonts/fonts.css';

function App() {
  const [c, setC] = useState(<></>);

  const handleNavigation = (link) => {
    if(link === 'app'){
      setC(<AppPage navHandler={handleNavigation}/>);
    } else if(link === '/'){
      setC(<HomePage navHandler={handleNavigation}/>);
    } else {
      setC(<NotFoundPage/>);
    }
  }

  useEffect(()=>{
    setC(<HomePage navHandler={handleNavigation}/>);
  },[]);

  return c;
}

export default App;
