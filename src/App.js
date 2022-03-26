import './App.css';
import Counter from "./Counter";
import PropsSending from "./PropsSending";
import UseStateIntro from "./UseStateIntro";
import TodoListSimple from "./TodoListSimple";
import TodoListFourStatus from "./TodoListFourStatus";
import TodoListFourStatusGrid from "./TodoListFourStatusGrid";
import CounterCallBack from "./CounterCallBack";
import {useState} from "react";

function App() {
    const minus = (v) => {
        setCountCall(countCall-v);
        console.log('minus');
    }
    const [countCall, setCountCall] = useState(5);

  return (
    <div className="App">
        <PropsSending />
        <UseStateIntro />
        <Counter />
        <TodoListSimple />
        <TodoListFourStatus />
        <TodoListFourStatusGrid />

        <CounterCallBack minus={minus} count={countCall}/>
    </div>
  );
}

export default App;
