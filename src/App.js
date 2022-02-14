import React, {useState} from 'react'


function App() {

    const [counter, setCounter] = useState(0);

    function clickPlus() {
        setCounter((prev) => ++prev) //counter+1
    }

    function clickMinus() {
        setCounter((prev) => --prev) //counter-1
    }

    return (
        <div>
            <div>
                <h1>Счетчик: {counter}</h1>
            </div>

            <button  onClick={clickMinus}>Убрать</button>
            <button  onClick={clickPlus}>Добавить</button>
        </div>

    )
}

export default App;
