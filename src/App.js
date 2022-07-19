
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import List from './Pages/List/List';
import Hotel from './Pages/Hotel/Hotel';

function App() {
  return (
    <div >
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/hotels' element={<List></List>} ></Route>
        <Route path='/hotels/:id' element={<Hotel></Hotel>} ></Route>
      </Routes>
    </div>
  );
}

export default App;
