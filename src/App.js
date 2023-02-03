import './App.css';
import { useState } from 'react';


function App() {


  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState([0, 0]);
  const [reset] = useState(0);

  const [addCounter, setAddCounter] = useState(false); /* afficher un nouveau compteur*/

  return (
    <>
      <div className='container'>

        <button onClick={() => {
          setCounter(counter + 1);
        }}> + 1 </button>
        <button onClick={() => {
          setCounter(counter - 1);
        }}> - 1 </button>
        <button onClick={() => {
          setCounter(counter + 10);
        }}> +10 </button>
        <button onClick={() => {
          setCounter(counter - 10);
        }}> -10 </button>

        <button onClick={() => {
          setCounter(counter * 2);
        }}> x 2 </button>

        <button onClick={() => {
          setCounter(counter * Math.PI);
        }}> x PI </button>

        <button onClick={() => {
          setCounter(reset);
        }}> reset </button>
      </div>
      <div className='containerCounter'>
        <div className="myCounter" >
          <span className={counter <= 0 ? "blue" : counter <= 50 ? "green" : "red"}>
            {counter}
          </span>

        </div>

        {/* ----------------- COMPTEUR N° 2 ----------------- */}
        <section className='counter2'>

          <button onClick={() => {
            setCounter2(counter2 + 1);
          }}> + 1 </button>


          {!addCounter ? "" : (<div className="myCounter2" >
            <span className={counter2 <= 5 ? "green" : counter2 <= 10 ? "blue" : "red"}>
              {counter2}
            </span>
          </div>

          )}

          <button className="compteur2" onClick={() => {
            setAddCounter(true); /* afficher le 2ème compteur */
            counter2.map((elem, index) => {
              { console.log("elem.counter: ", elem.counter2, index); }
              { console.log("elem.setCounter: ", elem.setCounter2) }

              return (

                <div className="myCounter2" >
                  <span className={elem.counter2 <= 5 ? "green" : elem.counter2 <= 10 ? "blue" : "red"}>
                    {elem.counter2}
                  </span>
                </div>
              )
            })
          }}> Add counter2 </button>
        </section>

      </div>

    </>
  )



}

export default App;
