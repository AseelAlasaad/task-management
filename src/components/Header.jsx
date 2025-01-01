import './Header.css';
import logoDark from '../assets/logo-dark.svg'
import Addtask from '../assets/icon-add-task-mobile.svg'
function Header(props) {

    return (
        <div className='header-container'>
     <div className="container">
            <div className="Logo">
            <img src={logoDark} alt="logo" />
           

            </div>

              <div className="platform">
                <h2>{props.headerText}</h2>
            </div>

            <div className='button1'>
                   <button> <img src={Addtask} alt="" />Add New Task</button>
            </div>

        </div>
        </div>
   
    );
}
export default Header;