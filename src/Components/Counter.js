import { useState } from 'react';
const Counter = ({ counter , counters, setCounters, index }) => {


    //! COMPORTEMENTS
    
    const functionPlus = () => {
        const copy = [...counters];
        copy[index]++;
        //console.log(element);
        setCounters(copy);
    }

    const functionMoins = () => {
        const copy = [...counters];
        copy[index]--;
        //console.log(element);
        setCounters(copy);
    }

    const functionPi = () => {
        const copy = [...counters];
        copy[index] = copy[index] * (Math.PI);
        //console.log(element);
        setCounters(copy);
    }

    const functionCent = () => {
        const copy = [...counters];
        copy[index] = copy[index] + 100;
        //console.log(counters);
        setCounters(copy);
    }

    const functionReset = () => {
        const copy = [...counters];
        copy[index] = 0;
        //console.log(element);
        setCounters(copy);
    }



    //! RENDER
    return (<>
        <div className="containerAddBtn">
            {/* afficher un nouveau compteur*/}


            <section className='counters'>
                <div className='btnEtCounter'>

                    <button className="btnPlus" onClick={functionPlus}> + </button>

                    <span id="counter" key={index} className={counter <= 50 ? "blue" : counter <= 1000 ? "green" : "red"}>
                        {counter}</span>

                    <button className="btnMinus" onClick={functionMoins}> - </button>
                </div>

                <div className='autreBtn'>
                    <button className="btnCent" onClick={functionCent}> + 100 </button>

                    <button className="btnPi" onClick={functionPi}> xPI </button>

                    <button className="btnReset" id="btnReset" onClick={functionReset}> reset </button>
                    {/* <Button className="btnReset" name="nono" /> */}
                </div>
            </section>
        </div>
    </>
    )
}
export default Counter;