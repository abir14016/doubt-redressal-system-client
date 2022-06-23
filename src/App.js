import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import RaiseDoubt from './Pages/RaiseDoubt/RaiseDoubt';
import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/Shared/NotFound/NotFound';
import SolveDoubts from './Pages/SolveDoubts/SolveDoubts';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/raisedoubt' element={<RaiseDoubt></RaiseDoubt>}></Route>
        <Route path='solvedoubts' element={<SolveDoubts></SolveDoubts>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
