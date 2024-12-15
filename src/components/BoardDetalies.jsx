import './Detailes.css';
import Tasks from './Tasks';
function BoardDetalies(props) {
    
    return (
        <div className="container1">
         {
            props.selectedBoard.map((item,key)=>{
               
                return(
                    <div key={key} className="board-detalies">
                         
                        <p id="taskname">
                        {item.name }  ({item.tasks.length})
                        </p>

                        <div  className='task-cards'>
                            {
                                item.tasks.map((item,index)=>{
                                    return(
                                        // <div key={index} >
                                            <Tasks tasks={item} />
                                        // </div>
                                    )
                                })
                            }
                        </div>

                    </div>
                )
            })
         }
        </div>
    );
}
export default BoardDetalies;