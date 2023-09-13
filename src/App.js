import { useEffect } from 'react';
import './App.css';
import Navbar from './layouts/Navbars/Navbar';
import MainRoute from './routes/MainRoute';
import { fetchData } from './utills/api';
import { Toaster } from "./components/ui/toaster"

function App() {

  useEffect(()=>{
    fetchData();
  },[])

  return (
    <div className='flex'>
        <Navbar/>
        <MainRoute/>
        <Toaster/>
    </div>
  );
}

export default App;
