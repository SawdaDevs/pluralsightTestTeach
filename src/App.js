import './App.css';
import  Button  from './components/Button';
function App() {
  return (
    <div className="App">
      <div className="calcWrapper">
      <div className='inputWrapper'>
        <input className="values"></input>
      </div>
      <div>
      <div className='otherButtons'>
            <button>=</button>
            <button>C</button>
        </div>
        <div className='buttonWrapper'>
          <Button value={1}></Button>
          <button onClick={()=>console.log('clicked 2')}>2</button>
          <button onClick={()=>console.log('clicked 3')}>3</button>
          <button onClick={()=>console.log('clicked 4')}>4</button>
          <button onClick={()=>console.log('clicked 5')}>5</button>
          <button onClick={()=>console.log('clicked 6')}>6</button>
          <button onClick={()=>console.log('clicked 7')}>7</button>
          <button onClick={()=>console.log('clicked 8')}>8</button>
          <button onClick={()=>console.log('clicked 9')}>9</button>
        </div>
        <div className="operatorButtons">
          <button onClick={()=>console.log('clicked +')}>+</button>
          <button onClick={()=>console.log('clicked -')}>-</button>
          <button onClick={()=>console.log('clicked *')}>*</button>
          <button onClick={()=>console.log('clicked /')}>-</button>
        </div>

      </div>
      </div>
      
    </div>
  );
}

export default App;
