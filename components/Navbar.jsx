"use client"

import Image from 'next/image'
import { useContext } from 'react'
import { SqlContext } from '@/Context/SqlContext';



const Navbar = () => {
  const {theme,setTheme}=useContext(SqlContext);
  const switchTheme=()=>{
    console.log("Switching Theme");
    if(theme=='dark'){
      setTheme('light');
    }
    else setTheme('dark');
  }
  console.log('theme',theme);
  return (
    <div className="navbar">
        <Image className='navbar-logo' src="/assets/Images/atlan-blue.svg" alt="Atlan" width={70} height={70}/>
        <div className="app-title">SQL Editor</div>
        <div className="mode-switch-btn" onClick={switchTheme}>
            {
              (theme=='dark')?<Image className="mode-switch-icon" alt="Switch Mode" src="/assets/Images/light-mode-icon.svg" width={20} height={20}/>
              :
              <Image className="mode-switch-icon" alt="Switch Mode" src="/assets/Images/dark-mode-icon.svg" width={20} height={20}/>
            }
        </div>
    </div>
  )
}

export default Navbar