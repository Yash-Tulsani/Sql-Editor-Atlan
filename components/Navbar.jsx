"use client"

import Image from 'next/image'
import { useContext } from 'react'
import { SqlContext } from '@/Context/SqlContext';



const Navbar = () => {
  // Global States
  const {theme,setTheme,isPageLoading}=useContext(SqlContext);

  if(isPageLoading) return null;

  // Event Handlers
  const switchTheme=()=>{
    if(theme=='dark'){
      setTheme('light');
    }
    else setTheme('dark');
  }

  //Local Variables
  const appTitleClassName=`app-title ${theme=='dark'?'app-title-dark':'app-title-light'}`
  const modeSwitchBtnClassName=`mode-switch-btn ${theme=='dark'?'mode-switch-btn-dark':'mode-switch-btn-light'}`

  return (
    <div className="navbar">
        <Image className='navbar-logo' src="/assets/Images/atlan-blue.svg" alt="Atlan" width={70} height={70}/>
        <div className={appTitleClassName}>SQL Editor</div>
        <div className={modeSwitchBtnClassName} onClick={switchTheme}>
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