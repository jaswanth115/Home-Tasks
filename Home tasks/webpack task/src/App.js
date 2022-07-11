import logo from './logo.svg';
import './App.css';
import Allupdates from './components/Allupdates';
import Covidappfn from './components/Covidappfn';
import AllNews from './components/AllNews';

function App() {
  return (
    <div className="App">
      <Covidappfn/>
      <Allupdates/>
      <AllNews/>
    </div>
  );
}

export default App;
