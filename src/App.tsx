import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Login, Home, About, Contact} from './MyComponents/index'

function App() {
  return (
    // establish routing between pages
    <Router>
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/Home' element={<Home/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/Contact' element={<Contact/>}/>
        </Routes>
    </Router>
  );
}

export default App;
