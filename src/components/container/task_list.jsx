import React, { useEffect, useState } from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskForm from '../pure/forms/taskForm';
import TaskComponent from '../pure/task';

const TaskListComponent = () => {

    const defaultTask1 = new Task('Example1', 'Description1', true, LEVELS.NORMAL)
    const defaultTask2 = new Task('Example2', 'Description2', false, LEVELS.URGENTE)
    const defaultTask3 = new Task('Example3', 'Description3', false, LEVELS.BLOCKING)

    // Estado del componente
    const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);
    const [loading, setLoading] = useState(true);

    // Control del ciclo de vida del componente 
    useEffect(() => {
        console.log('Task State has been modified');
        setLoading(false);
        return () => {
            console.log('TaskList component is going to unmount...');
        };
    }, [tasks]);

    function completeTask(task) {
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks[index].completed = !tempTasks[index].completed;
        // We update the state of the component with the new list of tasks and it will update the 
        //iteration of the tasks in order to show the task update
        setTasks(tempTasks);
    }

    function deleteTask(task) {
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks.splice(index, 1);
        setTasks(tempTasks);
    }

    function addTask(task) {
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks.push(task);
        setTasks(tempTasks);
    }

    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                    <div className='card-header p-3'>
                        <h5>
                            Your Tasks:
                        </h5>
                    </div>
                    <div className='card-body' data-mdb-scrollbar='true' style={{ position: 'relative', height: '400px' }}>
                        <table>
                            <thead>
                                <tr>
                                    <th scope='col'>Title</th>
                                    <th scope='col'>Description</th>
                                    <th scope='col'>Priority</th>
                                    <th scope='col'>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tasks.map((task, index) => {
                                    return (
                                        <TaskComponent
                                            key={index}
                                            task={task}
                                            complete={completeTask}
                                            remove={deleteTask}>
                                        </TaskComponent>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <TaskForm add={addTask}></TaskForm>
        </div>
    );
};

export default TaskListComponent;
