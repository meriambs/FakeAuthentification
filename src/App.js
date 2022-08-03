import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Login from './Component/Authentification/Login';
import Dashbord from './Component/Dashbord/Dashbord';
function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<Login/>}/>
      {/* <Route path='/Login' element={<Login/>}/> */}
      <Route path='/test' element={<Dashbord/>}/>
     </Routes>
    </div>
  );
}

export default App;
