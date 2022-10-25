import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Component/Header/Header';
import Log from './Component/LogIn/Log'
function App() {
  return (
    <div className=''>
      <Header></Header>
      <Routes>
        <Route path='/Book' element='<Book>' ></Route>
        <Route path="/login" element={<Log></Log>}></Route>
        <Route></Route>
        <Route></Route>
      </Routes>
    </div>
  );
}

export default App;