import {useState} from "react";

const statusType = ['todo', 'progress', 'review', 'done']

const initialToDoList = [
    {
        id: 'tdlfs0',
        title: 'Learn JS Syntax',
        status: 'done' //progress, review, done
    },
    {
        id: 'tdlfs1',
        title: 'Learn Express JS',
        status: 'review' //progress, review, done
    },
    {
        id: 'tdlfs2',
        title: 'Learn HTML',
        status: 'todo' //progress, review, done
    },
    {
        id: 'tdlfs3',
        title: 'Learn CSS',
        status: 'todo' //progress, review, done
    },
    {
        id: 'tdlfs4',
        title: 'Practice JS',
        status: 'progress' //progress, review, done
    },
]

function TodoListFourStatus() {

    const [tasks, setTasks] = useState(initialToDoList);
    const [taskTitle, setTaskTitle] = useState('');

    const changeStatus = (elementId, statusTypeIndex) => {
        //console.log(elementId, statusTypeIndex);
        const newSetOfTasks = tasks.map(el => (el.id === elementId) ? {
            ...el,
            status: statusType[statusTypeIndex]
        } : el);
        setTasks(newSetOfTasks);
    }

    const addTask = () => {
        const newSetOfTasks = [...tasks];
        newSetOfTasks.push({id: 'tdlfs' + newSetOfTasks.length, title: taskTitle, status: statusType[0]});
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


    return (
        <div className='toDoListFourStatus'>
            <h1>To do list (four status)</h1>
            <input onChange={changeNewTaskTitle} value={taskTitle}></input>
            <button onClick={addTask}>Add task</button>
            <ul>
                {tasks.map(el => (
                    <li key={el.id}>
                        <div>
                            {el.title}
                        </div>
                        <div>
                            {statusType.map((element, index) => <button className='statusButton' key={index}
                                                                        disabled={el.status === statusType[index]}
                                                                        onClick={() => changeStatus(el.id, index)}>{element}</button>)}
                            <button onClick={() => delTask(el.id)} className='delete'>DEL</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoListFourStatus;