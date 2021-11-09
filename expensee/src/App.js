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

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/charts">charts</Link>
            </li>
            <li>
              <Link to="/add">add</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route exact path="/home" element={<Home/>}>
            
          </Route>
          <Route exact path="/charts" element={<Charts/>}>
            
          </Route>
          <Route exact path="/add" element={<Add/>}>
           
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

