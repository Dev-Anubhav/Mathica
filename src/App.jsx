import './App.css'
import Navbar from './sidebar';
import Home from './Home';

import { Route,Routes,BrowserRouter } from 'react-router-dom';

const App=()=>{
 

 return(
  <>
  <BrowserRouter>
  <Navbar />
  <Routes>
  <Route path="/" element={<Home />} />
 
  </Routes>
  </BrowserRouter>

 

  </>
 )
}

export default App
