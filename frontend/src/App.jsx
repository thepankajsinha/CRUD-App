import './App.css'
import CreateUser from './CreateUser/CreateUser';
import User from './getUser/User'
import {Routes, Route} from "react-router-dom";
import UpdateUser from './UpdateUser/UpdateUser';

function App() {
  return (
    <>
     <Routes>
        <Route path="/" element={<User/>}/>
        <Route path="/createUser" element={<CreateUser/>}/>
        <Route path="/updateUser/:id" element={<UpdateUser/>}/>
      </Routes>
    </>
  )
}

export default App
