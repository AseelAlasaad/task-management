import './Detailes.css'
function BoardDetalies(props) {

    return (
        <div className="container1">
         {
            props.selectedBoard.map((item,key)=>{
                return(
                    <div key={key} className="board-detalies">
                        <p>
                        {item.name}
                        </p>

                    </div>
                )
            })
         }
        </div>
    );
}
export default BoardDetalies;