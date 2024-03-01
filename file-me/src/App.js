import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyFiles from './components/MyFiles';
import Upload from './components/Upload';
import MyProfile from './components/MyProfile';
import Signup from './components/Signup';
import Login from './components/Login';
import { useState, useEffect } from 'react';

function App() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    return (
        user ? (
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route index element={<Upload />} />
                    <Route path="/profile" element={<MyProfile />} />
                    <Route path="/files" element={<MyFiles />} />
                    <Route path="/upload" element={<Upload />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                </Routes>
            </BrowserRouter>
        ) : (
          <BrowserRouter>
            <Routes>
              <Route index element={<Login />}/>
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </BrowserRouter>
        )
    );
}

export default App;
