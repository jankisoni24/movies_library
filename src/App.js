import { Fragment } from 'react';
import Login from './components/Login';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import WatchList from './components/WatchList';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />}></Route>
        <Route exact path="/home" element={<Home />}></Route>
        <Route exact path="/watchlist" element={<WatchList />}></Route>
      </Routes>
    </Router>
  )
}

export default App;
