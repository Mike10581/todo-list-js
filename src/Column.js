function Column(props) {
    return (
        <div className={props.status} key={props.status}>
            <strong>{props.status}</strong>
            {props.tasks.filter((task) => (props.tasks.status === props.status)).map(task => (
                    <div key={task.id}>
                        {(task.status !== props.statusType[0]) ? <button onClick={() => props.changeStatusBackward(task.id)}
                                                                         className='statusButton'>&#8592;</button> : <></>}
                        {task.title}
                        {(task.status !== props.statusType[props.statusType.length - 1]) ?
                            <button onClick={() => props.changeStatusForward(task.id)}
                                    className='statusButton'>&#8594;</button> : <></>}
                        <button onClick={() => props.delTask(task.id)} className="delete">DEL</button>
                    </div>
                )
            )}
        </div>
    )
}

export default Column;