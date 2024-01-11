
import './App.css';
import { Header } from './components/Header';
import Students from './components/Students';

function App() {
  return (
    <div className="App">

      <Header />
      <Students
        name="Sagar"
        rollNum={1}
      />
      <hr></hr>
      <Students
        name="shubham"
        rollNum={2}
      />
      <Students
        name="ram"
        rollNum={3}
      />
      <Students />
    </div>
  );
}

export default App;
