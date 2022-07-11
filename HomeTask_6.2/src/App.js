import logo from './logo.svg';
import './App.css';
import arr from './components/Db'
import Moviecard from './components/Moviecard';
import './components/style.css'
import MovieApp from './components/MovieApp';
import './style2.css'
function App() {
  
  
  return (
    <div className="App">
        <MovieApp/>

      <Moviecard

        id={arr[0].id}
        title={arr[0].title}
        name={arr[0].name}
        link={arr[0].link} />

      <Moviecard

        id={arr[1].id}
        title={arr[1].title}
        name={arr[1].name}
        link={arr[1].link} />

      <Moviecard

        id={arr[2].id}
        title={arr[2].title}
        name={arr[2].name}
        link={arr[2].link} />

      <Moviecard

        id={arr[3].id}
        title={arr[3].title}
        name={arr[3].name}
        link={arr[3].link} />

      <Moviecard

        id={arr[4].id}
        title={arr[4].title}
        name={arr[4].name}
        link={arr[4].link} />

      <Moviecard

        id={arr[5].id}
        title={arr[5].title}
        name={arr[5].name}
        link={arr[5].link} />


      <Moviecard

        id={arr[6].id}
        title={arr[6].title}
        name={arr[6].name}
        link={arr[6].link} />


      <Moviecard

        id={arr[7].id}
        title={arr[7].title}
        name={arr[7].name}
        link={arr[7].link} />



      {/*<Moviecard id={val.id} title={val.title}name={val.name} link={val.link}/>*/}



    </div>
  );
}

export default App;
