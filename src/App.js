import './App.css';
import nav from './assets/nav.svg'
import Slider from './components/slider';
import Main from './page/main';

function App() {
  return (
    <div className="App">
      <header className="header">
          <div className="header-logo">
               <h3>HARBOUR SPACE</h3>
          </div>

          <div className="header-nav"><img src={nav} alt="Nav"/></div>
      </header>
      <Main></Main>
      <Slider></Slider>
    </div>
  );
}

export default App;
