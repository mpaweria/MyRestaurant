import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Login, Home, About, Contact, CreateMenu, CreateCategory, CreateDish, ViewMenu, ViewCategory, ViewDish, UpdateCategory, UpdateDish} from './Components/index'

function App() {
  return (
    // establish routing between pages
    <Router>
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/Home' element={<Home/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/Contact' element={<Contact/>}/>
            <Route path='/CreateMenu' element={<CreateMenu/>}/>
            <Route path='/CreateCategory' element={<CreateCategory/>}/>
            <Route path='/CreateDish' element={<CreateDish/>}/>
            <Route path='/ViewMenu' element={<ViewMenu/>}/>
            <Route path='/ViewCategory/:id' element={<ViewCategory/>}/>
            <Route path='/ViewDish/:id' element={<ViewDish/>}/>
            <Route path='/UpdateCategory/:id' element={<UpdateCategory/>}/>
            <Route path='/UpdateDish/:id' element={<UpdateDish/>}/>
        </Routes>
    </Router>
  );
}

export default App;
