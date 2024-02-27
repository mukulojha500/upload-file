import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import MyFiles from './components/MyFiles';
import Upload from './components/Upload';
import MyProfile from './components/MyProfile';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route index element={<Upload/>}/>
        <Route path='/profile' element={<MyProfile/>}/>
        <Route path='/files' element={<MyFiles/>}/>
        <Route path='/upload' element={<Upload/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
