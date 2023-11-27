//import App from './App.css';
import Nav from './components/Nav.';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';

function App() {
  return (
 
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Nav/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="reg" element={<Register/>}/>
            
        </Routes>
      </BrowserRouter>
        
    </div>
  );
}

export default App;
