import './App.css'
import Navbar from './sidebar';
import Home from './Home';
import About from './About';
import { Route,Routes,BrowserRouter } from 'react-router-dom';

const App=()=>{
 

 return(
  <>
  <BrowserRouter>
  <Navbar />
  <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/About" element={<About />} />
  </Routes>
  </BrowserRouter>

 

  </>
 )
}

export default App
