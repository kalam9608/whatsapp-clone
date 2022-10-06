import './App.css';
import ChatSection from './ChatSection';
import Sidebar from './Sidebar';


function App() {
  // BEM naming convation
  return (
    <div className="App">
 
    <div className="app-body">
      {/* side bar */}
      <Sidebar />

      {/* chat */}
      <ChatSection/>
    </div>
    
    </div>
  );
}

export default App;
