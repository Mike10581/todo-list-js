function CounterCallBack(props) {
    return (
        <div>
            <h1>Here is Counter Call Back</h1>
            <div>{props.count}</div>
            {/*<button onClick={props.minus}>minus</button>*/}
            <button onClick={() => props.minus(40)}>minus 40</button> {/* if needs to send value*/}
        </div>

    )
}

export default CounterCallBack;