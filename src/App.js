import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import RaiseDoubt from './Pages/RaiseDoubt/RaiseDoubt';
import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/Shared/NotFound/NotFound';
import RequireAuth from './Pages/Shared/RequireAuth/RequireAuth';
import SolveDoubts from './Pages/SolveDoubts/SolveDoubts';
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/raisedoubt' element={<RequireAuth>
          <RaiseDoubt></RaiseDoubt>
        </RequireAuth>}></Route>
        <Route path='solvedoubts' element={<RequireAuth>
          <SolveDoubts></SolveDoubts>
        </RequireAuth>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
