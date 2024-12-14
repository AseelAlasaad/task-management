import './App.css';
import Header from './components/Header';
import Bords from './components/Bords';
import Data from '../src/data.json'
function App() {
  const data= Data.boards
  return (
    <div className="App">
      
     
       {/* <p className='bordlen'> All BOARDS {data.length}</p> */}
      <Bords/>
    </div>
  );
}

export default App;
