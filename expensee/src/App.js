import './App.scss';
import Footer from './components/Footer/Footer';

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
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/">Users</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/">
            
          </Route>
          <Route path="/">
            
          </Route>
          <Route path="/">
            
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

