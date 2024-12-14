import { useState } from "react";
import'./Board.css';
import BoardDetalies from './BoardDetalies'
function Board(props){

 
    return(
        <>
       
       <div className="container">
            <button onClick={props.onSelect}>{props.board.name}</button>
            {props.isSelected && <BoardDetalies selectedBoard={props.board.columns} />}
        </div>
   
      

        
        </>
      
    );
}
export default Board;