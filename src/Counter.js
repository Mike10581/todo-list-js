import {useState} from "react";

const initialCounts = [
    {
        id: 'c0',
        value: 10
    },
    {
        id: 'c1',
        value: 12
    },
]

function Counter() {

    const [counts, setCounts] = useState(initialCounts);
    const [counterValue, setCounterValue] = useState(0);

    const plus = (id) => {
        const updatedCounts = counts.map(el => el.id === id
            ? {  //if element's ID === received ID
                ...el,  // then return all what we have inside element but...
                value: el.value + 1   //change VALUE as we need
            }
            : el);  // in case IF is false return element as it exist
        setCounts(updatedCounts);
    }

    const minus = (id) => {
        const updatedCounts = counts.map(el => el.id === id
            ? {  //if element's ID === received ID
                ...el,  // then return all what we have inside element but...
                value: el.value - 1   //change VALUE as we need
            }
            : el);  // in case IF is false return element as it exist
        setCounts(updatedCounts);
    }

    const addCounter = () => {
        // counts.push({
        //     id: counts.length,
        //     value: 0
        // });
        // setCounts(counts);
        const newSetOfCounts = [...counts];
        newSetOfCounts.push({
            id: 'c' + counts.length,
            value: counterValue
        });
        setCounts(newSetOfCounts);
    }

    const removeCounter = (id) => {
        const newSetOfCounts = counts.filter(el => el.id !== id);
        setCounts(newSetOfCounts);
    }

    const newCounterValue = (e) => {
        setCounterValue(+e.target.value);
    }

    return (
        <div className='counter'>
            <h1>Counter</h1>
            <input onChange={newCounterValue} value={counterValue}></input>
            <button onClick={addCounter}>Add count</button>
            <ul>
                {counts.map(count => (
                    <li key={count.id}>
                        <button onClick={() => minus(count.id)}>-</button>
                        <strong> {count.value} </strong>
                        <button onClick={() => plus(count.id)}>+</button>
                        <button className="delete" onClick={() => removeCounter(count.id)}>Remove counter</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Counter;