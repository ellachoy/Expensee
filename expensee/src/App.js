import './App.scss';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home.js';
import Add from'./pages/Add/Add.js';
import Charts from './pages/Charts/Charts.js';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    
      
      <Router>
        <h1>Expensee</h1>
      <div>
        <Routes>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/charts">
            <Charts/>
          </Route>
          <Route path="/add">
            <Add/>
          </Route>
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
