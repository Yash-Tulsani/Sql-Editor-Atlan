"use client";
import Image from 'next/image'
import { useState, useEffect, useContext } from 'react';
import { SqlContext } from '@/Context/SqlContext';

const QueryTab = ({query,idx,handleCloseTab,activeTabs,setActiveTabs}) => {
  const getCloseIconSrc=()=>{
    if(theme=='dark'){
      if(isActive()){
        return "dark-mode-close-selected.svg"
      }
      else{
        return "dark-mode-close.svg"
      }
    }
    else{
      if(isActive()){
        return "light-mode-close-selected.svg"
      }
      else{
        return "light-mode-close.svg"
      }
    }
  }

  const isActive=()=>{
    return activeTabs[idx];
  }

  const {theme}=useContext(SqlContext);
  const [closeIconSvg,setCloseIconSvg]=useState(getCloseIconSrc());

  const handleTabClick=()=>{
    const activeTabsUpdated=new Array(activeTabs.length).fill(false);
    activeTabsUpdated[idx]=true;
    setActiveTabs(activeTabsUpdated);
  }

  

  useEffect(()=>{
    setCloseIconSvg(getCloseIconSrc());
  },[])

  useEffect(()=>{
    setCloseIconSvg(getCloseIconSrc());
  },[activeTabs,theme])

  

  return (
    <div className={isActive()?"sql-playground-query-tab-selected":"sql-playground-query-tab"} onClick={handleTabClick}>
        <span className={isActive()?"sql-playground-query-tab-name-selected":"sql-playground-query-tab-name"}>{query.name}</span>
        <span className="sql-playground-query-tab-close" onClick={()=>handleCloseTab(idx)}>
            <Image src={"/assets/Images/"+closeIconSvg} width={20} height={20} className={isActive()?'sql-playground-query-tab-close-icon-selected':'sql-playground-query-tab-close-icon'} alt="Close"/>
        </span>
    </div>
  )
}

export default QueryTab