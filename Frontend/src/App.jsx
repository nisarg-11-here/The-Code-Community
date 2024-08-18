import "./App.css";
import { Routes, Route } from 'react-router-dom';
import {Toaster} from 'react-hot-toast'
import Login from "./Components/Login";

function App() {
  return (
    <>
      <Toaster position="top-center" toastOptions={{ duration: 3000 }} />
      <Routes>
        <Route path="/login" element={<Login />} />
        {/* <Route path='/' element={<LandingPage />} />
        
        <Route path='/register' element={<Register />} />

        <Route path="*" element={<NotFound404 />} /> */}
      </Routes>
    </>
  );
}

export default App;
