import Navbar from './Components/Navbar';
import Home from './Components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className='App' >
      <Navbar />
      <div className='content'>
        <Routes>
          <Route path="/" component={Home}/>
        </Routes>
      </div>
    </div>  
    </Router>
  );
}

export default App;
