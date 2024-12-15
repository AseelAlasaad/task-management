import './Tasks.css';
function Tasks(props) {

    return (
        <>
            <div className='task-card'>
                <p className='task-title'>
                    {props.tasks.title}
                </p>
                <span className="subtasks">
                    {`${props.tasks.subtasks.filter(subtask => subtask.isCompleted).length} of ${props.tasks.subtasks.length} subtasks`}
                </span>

            </div>
        </>
    )
}
export default Tasks;