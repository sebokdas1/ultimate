import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Componants/Login/Login';
import Navbar from './Componants/Navbar/Navbar';
import Signup from './Componants/Signup/Signup';
import Stepcontext from './Componants/Signup/Stepcontext';

function App() {
  return (
    <div className="lg:mx-[56px]">
      <Navbar />
      <Routes>
        <Route path='signup' element={
          <Stepcontext>
            <Signup />
          </Stepcontext>
        }></Route>
        <Route path='login' element={<Login />}></Route>
        {/* <Route path='login' element={<Login />}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
