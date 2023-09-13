import { useEffect } from 'react';
import './App.css';
import Navbar from './layouts/Navbars/Navbar';
import MainRoute from './routes/MainRoute';
import { fetchData } from './utills/api';
import { Toaster } from "./components/ui/toaster"
import { useSelector } from 'react-redux';

function App() {
  const {isAuth,token}=useSelector(store=>store.userReducer);
  useEffect(()=>{
    fetchData();
  },[])

  return (
    <div className='flex'>
        {isAuth&&token&&<Navbar/>}
        <MainRoute/>
        <Toaster/>
    </div>
  );
}

export default App;
