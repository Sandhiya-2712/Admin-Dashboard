import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Home from './Home';

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const openSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }
  
  return (
    <div className='grid-container'>
       <Header openSidebar={openSidebar}/>
        <Sidebar openSidebarToggle={openSidebarToggle}/>  
      <Home />
     



    </div>
  )
}

export default App
