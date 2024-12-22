import './Tasks.css';
import { useState } from 'react';
function Tasks(props) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleCardClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
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