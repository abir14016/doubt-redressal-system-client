import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import RequireStudent from './Pages/Login/RequireStudent/RequireStudent';
import RequireTeacher from './Pages/Login/RequireTeacher/RequireTeacher';
import UpdateRole from './Pages/Login/UpdateRole/UpdateRole';
import RaiseDoubt from './Pages/RaiseDoubt/RaiseDoubt';
import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/Shared/NotFound/NotFound';
import RequireAuth from './Pages/Shared/RequireAuth/RequireAuth';
import SolveDoubts from './Pages/SolveDoubts/SolveDoubts';
import SolveSingleDoubt from './Pages/SolveSingleDoubt/SolveSingleDoubt';
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/raisedoubt' element={<RequireAuth>
          <RequireStudent>
            <RaiseDoubt></RaiseDoubt>
          </RequireStudent>
        </RequireAuth>}></Route>
        <Route path='solvedoubts' element={<RequireAuth>
          <RequireTeacher>
            <SolveDoubts></SolveDoubts>
          </RequireTeacher>
        </RequireAuth>}></Route>
        <Route path='doubt/:doubtId' element={<SolveSingleDoubt></SolveSingleDoubt>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/updaterole' element={<UpdateRole></UpdateRole>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
