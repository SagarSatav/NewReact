
import './App.css';
import movie from"./movie.json";
import Movie from './components/Movie';


function App() {
   let login=true;
  // if (login==true){
  //  return <h1>blank</h1>
  // }
  //if else statemnet




  return (
    <div className="App">
      {
        login == false ? <h1>hello</h1> : <h1> Collections</h1>
      }
      <h1>Movies</h1>
      <div className="main">
        {
          movie.map((element,index)=>{
            return(
              <Movie 
                key={index}
                title={element.Title}
                year={element.Year}
                img={element.Poster}
              />
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
