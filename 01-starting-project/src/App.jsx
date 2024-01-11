import CoreConcepts from "./components/CoreConcepts.jsx"
import {CORE_CONCEPTS} from "./data.js"
import Header from "./components/Header.jsx";



function App() {
  return (
    <div>
      
      <Header />
      <main>
      <h2>Hello</h2>
        <section id="core-concepts">
        <h2>core concepts!</h2>
        <ul>
          <CoreConcepts {...CORE_CONCEPTS[0]} />
          <CoreConcepts {...CORE_CONCEPTS[1]} />
          <CoreConcepts {...CORE_CONCEPTS[2]} />
          <CoreConcepts {...CORE_CONCEPTS[3]} />

        </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
