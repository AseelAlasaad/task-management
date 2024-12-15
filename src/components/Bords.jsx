import Data from '../data.json';
import BoardDetalies from './BoardDetalies';
import { useState } from 'react';
import iconBoard from '../assets/icon-board.svg'
import hidesidebar from '../assets/icon-hide-sidebar.svg'
import Header from './Header';
import './Board.css';

function Bords() {
    const data = Data.boards;
    const [selectedBoard, setSelectedBoard] = useState(null); // Track the selected board
    const [headerText, setHeaderText] = useState("Platform Launch"); 
    const [isLeftSectionVisible, setIsLeftSectionVisible] = useState(true);

    const toggleLeftSection = () => {
        setIsLeftSectionVisible(!isLeftSectionVisible);
    };
    function handleBoardSelection(board) {
        if (selectedBoard === board) {
            setSelectedBoard(null); // Deselect if the same board is clicked
            setHeaderText(board.name); 
        } else {
            setSelectedBoard(board); // Set the clicked board
            setHeaderText(board.name); 
        }
    }

    return (
        <>
          <Header headerText={headerText}/>
        <div className="bords-container">
           <div className="toggle-button">
                    <img id="boardimg" src={hidesidebar} alt="" />
                    <button onClick={toggleLeftSection} >
                        {isLeftSectionVisible ? 'Hide Sidebar' : 'Show Sidebar'}
                    </button>
            
            </div> 
            {/* Left Side: List of Boards */}
            {isLeftSectionVisible && (
                    <div className="boards-list">
                        <p className="bordlen">All BOARDS ({data.length})</p>
                        <div className="board-row">
                            {data.map((item, index) => (
                                <div
                                    key={index}
                                    onClick={() => handleBoardSelection(item)}
                                    className={`borderItem ${
                                        selectedBoard === item ? 'activeitem' : ''
                                    }`}
                                >
                                    <img id="boardimg" src={iconBoard} alt="" />
                                    {item.name}
                                </div>
                            ))}
                        </div>
                    </div>
                )}
          
            {/* Right Side: Selected Board Details */}
            <div className="board-details">
                {selectedBoard ? (
                    <BoardDetalies selectedBoard={selectedBoard.columns} />
                ) : (
                    <p className="placeholder-text">Select a board to view details</p>
                )}
            </div>

            
        </div>
        </>
        
    );
}

export default Bords;
