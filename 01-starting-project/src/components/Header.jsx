import coreImage from "../assets/react-core-concepts.png"
import './Header.css';

const description=["good","bad","very good","very bad"]

function randomGenerate(num){
  return Math.floor(Math.random()*(num+1));

}



export default function Header(){
    const desc=description[randomGenerate(3)]

    return (
      <header>
        <h1>Hello</h1>
        <img src={coreImage} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {desc} Fundamental React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
    );
  
    
  }