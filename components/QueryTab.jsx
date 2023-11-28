"use client";
import Image from 'next/image'
import { useState, useEffect, useContext } from 'react';
import { SqlContext } from '@/Context/SqlContext';

const QueryTab = ({query,idx,handleCloseTab}) => {

  // Global States
  const {theme,selectedTab,setSelectedTab}=useContext(SqlContext);

  // Helper functions
  const isActive=(idx)=>{
    return (selectedTab==idx);
  }
  const getCloseIconSrc=()=>{
    if(theme=='dark'){
      if(isActive(idx)){
        return "dark-mode-close-selected.svg"
      }
      else{
        return "dark-mode-close.svg"
      }
    }
    else{
      if(isActive(idx)){
        return "light-mode-close-selected.svg"
      }
      else{
        return "light-mode-close.svg"
      }
    }
  }

  // Local States
  const [closeIconSvg,setCloseIconSvg]=useState(getCloseIconSrc());

  // Event Handlers
  const handleTabClick=(idx)=>{
    setSelectedTab(idx);
  }

  // Side Effects
  useEffect(()=>{
    console.log(query," Query")
    setCloseIconSvg(getCloseIconSrc());
  },[])

  useEffect(()=>{
    setCloseIconSvg(getCloseIconSrc());
  },[selectedTab,theme])
 

  return (
    <div className={isActive(idx)?"sql-playground-query-tab-selected":"sql-playground-query-tab"} onClick={()=>handleTabClick(idx)}>
        <span className={isActive(idx)?"sql-playground-query-tab-name-selected":"sql-playground-query-tab-name"}>{query.id}</span>
        <span className="sql-playground-query-tab-close" onClick={()=>handleCloseTab(idx)}>
            <Image src={"/assets/Images/"+closeIconSvg} width={20} height={20} className={isActive(idx)?'sql-playground-query-tab-close-icon-selected':'sql-playground-query-tab-close-icon'} alt="Close"/>
        </span>
    </div>
  )
}

export default QueryTab