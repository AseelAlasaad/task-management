import Data from '../data.json';
import BoardDetalies from './BoardDetalies';
import { useState } from 'react';
import iconBoard from '../assets/icon-board.svg'
import showsidebar from '../assets/icon-show-sidebar.svg'
import hidesidebar from '../assets/icon-hide-sidebar.svg'
import addboard from '../assets/icon-add-task-mobile.svg'
import Header from './Header';
import './Board.css';

function Bords() {
    const data = Data.boards;
    const [selectedBoard, setSelectedBoard] = useState(null); // Track the selected board
    const [headerText, setHeaderText] = useState("Platform Launch");
    const [isLeftSectionVisible, setIsLeftSectionVisible] = useState(true);

    const [color, setColor] = useState('red');

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
            <Header headerText={headerText} />
            <div className="bords-container">
                <div className='toggle-button'>

                    <div className={isLeftSectionVisible ? 'hide-btn' : 'show-btn'} onClick={toggleLeftSection}>
                        <img
                            id="boardimg"
                            src={isLeftSectionVisible ? hidesidebar : showsidebar}
                            alt={isLeftSectionVisible ? 'Hide Sidebar' : 'Show Sidebar'}
                        />

                        <p>
                            {

                                isLeftSectionVisible ? 'Hide Sidebar' : ''

                            }

                        </p>

                    </div>

                </div>
                {/* Left Side: List of Boards */}
                {isLeftSectionVisible && (
                    <div className="boards-list">
                        <div className='boardcontent'>
                        <p className="bordlen">All BOARDS ({data.length})</p>
                        <div className="board-row">
                            {data.map((item, index) => (
                                <div
                                    key={index}
                                    onClick={() => handleBoardSelection(item)}
                                    className={`borderItem ${selectedBoard === item ? 'activeitem' : ''
                                        }`}
                                >
                                    <img id="boardimg" src={iconBoard} alt="" />
                                    {item.name}
                                </div>
                            ))}


                            <div
                                className={`borderItem`}
                                
                            >
                                <img id="boardimg" src={iconBoard} alt="" />
                               
                                  + Create New Board
                            </div>

                        </div>
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
