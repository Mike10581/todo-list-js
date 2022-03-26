import {useState} from "react";

const initialToDoList = [
    {
        id: 'tdls0',
        title: 'Learn JS Syntax',
        isDone: false
    },
    {
        id: 'tdls1',
        title: 'Learn Express JS',
        isDone: false
    },
    {
        id: 'tdls2',
        title: 'Learn HTML',
        isDone: false
    },
    {
        id: 'tdls3',
        title: 'Learn CSS',
        isDone: false
    },
    {
        id: 'tdls4',
        title: 'Pactice JS',
        isDone: false
    },

]

function TodoListSimple() {

    const [tasks, setTasks] = useState(initialToDoList);
    const [taskTitle, setTaskTitle] = useState('');

    const changeStatus = (id) => {
        const newSetOfTasks = tasks.map(el => (el.id === id) ? {...el, isDone: !el.isDone} : el);
        setTasks(newSetOfTasks);
    }

    const addTask = () => {
        const newSetOfTasks = [...tasks];
        newSetOfTasks.push({id: 'tdls' + newSetOfTasks.length, title: taskTitle, isDone: false});
        setTasks(newSetOfTasks);
        setTaskTitle('');
    }

    const delTask = (id) => {
        const newSetOfTasks = tasks.filter(el => el.id !== id);
        setTasks(newSetOfTasks);
    }

    const changeNewTaskTitle = (e) => {
        setTaskTitle(e.target.value);
    }

    const moveUp = (id) => {
        const newSetOfTasks = [...tasks];
        const upIndex = newSetOfTasks.findIndex((el) => el.id === id);
        [newSetOfTasks[upIndex], newSetOfTasks[upIndex - 1]] = [newSetOfTasks[upIndex - 1], newSetOfTasks[upIndex]];
        setTasks(newSetOfTasks);
    }

    const moveDown = (id) => {
        const newSetOfTasks = [...tasks];
        const downIndex = newSetOfTasks.findIndex((el) => el.id === id);
        [newSetOfTasks[downIndex], newSetOfTasks[downIndex + 1]] = [newSetOfTasks[downIndex + 1], newSetOfTasks[downIndex]];
        setTasks(newSetOfTasks);
    }

    return (
        <div className='toDoListSimple'>
            <h1>To do list (simple)</h1>
            <input onChange={changeNewTaskTitle} value={taskTitle}></input>
            <button onClick={addTask}>Add task</button>
            <ul>
                {tasks.map((el, index) => (
                    <li key={el.id}>
                        <div className={el.isDone ? 'done' : ''}>
                            <div>{el.title}</div>
                            <div>
                                <button className={el.isDone ? 'stick' : ''}
                                        onClick={() => changeStatus(el.id)}>{el.isDone ? 'Undone' : 'Done'}</button>
                                <button onClick={() => delTask(el.id)} className='delete'>DEL</button>
                                <button onClick={() => moveUp(el.id)} disabled={(index === 0)}>&#8593;</button>
                                <button onClick={() => moveDown(el.id)}
                                        disabled={(index === tasks.length - 1)}>&#8595;</button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoListSimple;