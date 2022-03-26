import {useState} from "react";
import Column from "./Column";

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
        status: 'progress' //progress, review, done
    },
    {
        id: 'tdlfs2',
        title: 'Learn HTML',
        status: 'review' //progress, review, done
    },
    {
        id: 'tdlfs3',
        title: 'Learn CSS',
        status: 'review' //progress, review, done
    },
    {
        id: 'tdlfs4',
        title: 'Do JS Practice',
        status: 'progress' //progress, review, done
    },
    {
        id: 'tdlfs5',
        title: 'Learn QA Manual',
        status: 'todo' //progress, review, done
    },
    {
        id: 'tdlfs6',
        title: 'Practice Express JS',
        status: 'progress' //progress, review, done
    },
    {
        id: 'tdlfs7',
        title: 'Learn React JS',
        status: 'progress' //progress, review, done
    },
    {
        id: 'tdlfs8',
        title: 'Learn Python Syntax',
        status: 'todo' //progress, review, done
    },
    {
        id: 'tdlfs9',
        title: 'Do Python Practice',
        status: 'todo' //progress, review, done
    },
]

function TodoListFourStatusGrid() {

    const [tasks, setTasks] = useState(initialToDoList);
    const [taskTitle, setTaskTitle] = useState('');

    const changeStatusForward = (id) => {
        const newSetOfTasks = tasks.map(el => (el.id === id) ? {
            ...el,
            status: statusType[statusType.findIndex((type) => type === el.status) + 1]
        } : el);
        setTasks(newSetOfTasks);

    }

    const changeStatusBackward = (id) => {
        const newSetOfTasks = tasks.map(el => (el.id === id) ? {
            ...el,
            status: statusType[statusType.findIndex((type) => type === el.status) - 1]
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
        <div className='toDoListFourStatusGrid'>
            <h1>To do list (four status - GRID)</h1>
            <input onChange={changeNewTaskTitle} value={taskTitle}></input>
            <button onClick={addTask}>Add task</button>
            <div className="statusTable">
                {statusType.map((status) => (

                    <Column
                        status={status}
                        statusType={statusType}
                        tasks={tasks}
                        changeStatusForward={changeStatusForward}
                        changeStatusBackward={changeStatusBackward}
                        delTask={delTask}
                    />

                ))}
            </div>
        </div>
    );
}

export default TodoListFourStatusGrid;