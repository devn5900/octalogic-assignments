import { useEffect } from 'react';
import './App.css';
import Navbar from './layouts/Navbars/Navbar';
import MainRoute from './routes/MainRoute';
import { fetchData } from './utills/api';
function App() {

  useEffect(()=>{
    fetchData();
  },[])

  return (
    <div className='flex'>
        <Navbar/>
        <MainRoute/>
    </div>
  );
}

export default App;
