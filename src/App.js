import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Component/Header/Header';

function App() {
  return (
    <div className=''>
      <Header></Header>
      <Routes>
        <Route path=''></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
      </Routes>
    </div>
  );
}

export default App;