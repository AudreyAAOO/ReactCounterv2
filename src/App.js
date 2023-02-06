import './App.css';
import { useState } from 'react';
import Counter from './Components/Counter';
// import Button from './Components/Button';


function App() {
  //! STATE
  const [counters, setCounters] = useState([0]);


  //! COMPORTEMENTS
  const functionAdd = () => {
    const copy = [...counters];
    copy.push(0)
    setCounters(copy);
  }


  //! RENDER
  return (
  <>
  <header>
          <h1>React counter v.2</h1>
          </header><main>
        <section>
          {counters.length < 3 && (
            <button className={counters.length < 3 ? "btnAdd" : "btnAddByebye"} onClick={functionAdd}> add a counter </button>
         ) }
      </section>

<section>
    {/* ----------------- COMPTEUR ----------------- */}
           {counters.map((counter, index) => {
                        return (
                          <Counter
                            key={index}
                            counter={counter}
                            counters={counters}
                            setCounters={setCounters}
                            index={index} />
                        )
    })}         </section>
    </main>
    <footer>
    Made with <a href="https://reactjs.org/">React</a> at{" "}
        <a href="https://www.lereacteur.io/">
          Le Reacteur by Audrey
        </a>
      </footer>

  </>
  )

}

export default App;
