import logo from './logo.svg';
import './App.css';
import {Routes,Route}  from 'react-router-dom'
import Home from './Component/Home';
import Login from './Component/Login';
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <div className="App">
     
     <Routes>
      <Route path="/" element={<Login></Login>}></Route>
    <Route  path="/home" element={<Home></Home>}></Route>
     </Routes>
    </div>
  );
}

export default App;
