import {useState} from "react";

function UseStateIntro() {

    //     STATE   setSTATE - is a function
    const [count, setCount] = useState(5);
    const [text, setText] = useState('hello')

    const hello = () => {
        setCount(count + 1);
    }

    const inputOnChange = (e) => {
        setText(e.target.value);
        setCount(count + 1);
    }
    return (
        <div className='useStateIntro'>
            <h1>Use state</h1>
            <h2>{count} - {text}</h2>
            <button onClick={hello}>Click me</button>
            {/*<input onChange={inputOnChange}/>*/} {/*not controlled element*/}
            <input onChange={inputOnChange} value={text}/> {/*controlled element*/}
        </div>
    );
}

export default UseStateIntro;