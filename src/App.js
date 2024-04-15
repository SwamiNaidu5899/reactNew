import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page from './Router/Page.jsx'
import Nav from './Router/nav.js'
import About from './Router/about.js' 
import Contact from './Router/contact.jsx'

function App() {
  return (
    <div className="App">
 <BrowserRouter>
 <Routes>
      <Route path='/' element={<Nav/>}/>
      <Route path='/Page' element={<Page/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Contact' element={<Contact/>}/>      
      </Routes>
 </BrowserRouter>
    </div>
  );
}

export default App;
