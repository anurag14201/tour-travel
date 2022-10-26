import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer'
import Log from './Component/LogIn/Log'
import Book from './Component/Book/Book'
import Home from './Component/Home/Home'
import SignUp from './Component/SignUp/SignUp';
import Place from './Component/Place/Place';
import Destination from './Component/About/Destination';
function App() {
  return (
    <div className=''>
      <Header></Header>
      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path="/place" element={<Place></Place>}></Route>
        <Route path='/book' element={<Book></Book>} ></Route>
        <Route path='/destination' element={<Destination></Destination>}></Route>
        <Route path="/login" element={<Log></Log>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;