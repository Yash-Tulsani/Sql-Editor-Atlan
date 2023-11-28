"use client"

import Image from 'next/image'
import styles from './page.module.css'
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import SqlPlayground from '@/components/SqlPlayground';
import QueryResultPane from '@/components/QueryResultPanel';
import RecentQueries from '@/components/RecentQueries';
import AvailableQueries from '@/components/AvailableQueries';
import QueryAnalytics from '@/components/QueryAnalytics';
import { use, useEffect } from 'react';
import { useContext } from 'react';
import { SqlContext } from '@/Context/SqlContext';
import SkeletonLayout from '@/components/SkeletonLayout';
import router from 'next/router';



export default function Home() {
  // Global States
  const {theme,isPageLoading,setIsPageLoading}=useContext(SqlContext);

  // when the is loaded, set the isPageLoading to false
  useEffect(()=>{
    setIsPageLoading(false);
  },[])

  useEffect(()=>{
    document.body.style.backgroundColor=theme==='light'?'var(--light-background)':'var(--dark-background)';  
  }
  ,[theme])

  // Coupled Components
  const CustomPanelHorizontalResizeHandle = () => {
    return (
      <PanelResizeHandle className="panel-resizer-horizontal">
        <div className={styles.resizeHandle}>
          <Image className='panel-resizer-icon' src={`/assets/Images/resize-icon-horizontal-${theme}.svg`} width={20} height={20} alt="Resize Handle" />
        </div>
      </PanelResizeHandle>
    );
  };
  
  const CustomPanelVerticalResizeHandle = () => {
    return (
      <PanelResizeHandle className="panel-resizer-vertical">
        <div className={styles.resizeHandle}>
          <Image className='panel-resizer-icon' src={`assets/Images/resize-icon-vertical-${theme}.svg`} width={20} height={20} alt="Resize Handle" />
        </div>
      </PanelResizeHandle>
    );
  };


  return (
    <>
      <SkeletonLayout/>
      {
        !isPageLoading?
        <PanelGroup direction='horizontal' className='sql-container'>
          <Panel defaultSizePercentage={60} minSizePercentage={20} className='sql-container-left-panel'>
            <PanelGroup direction='vertical' className='sql-playground-container'>
              <Panel defaultSizePercentage={50} minSizePercentage={20} >
                <SqlPlayground className='sql-playground'/>
              </Panel>
              <CustomPanelVerticalResizeHandle/>
              <Panel defaultSizePercentage={50} minSizePercentage={20}>
                <QueryResultPane/>
              </Panel>
            </PanelGroup>
          </Panel>
          <CustomPanelHorizontalResizeHandle/>
          <Panel defaultSizePercentage={40} minSizePercentage={20} className='sql-container-right-panel'>
            <PanelGroup direction='vertical' className='.sql-container-right-panel-queries-info-section'>
              <Panel defaultSizePercentage={100/3} minSizePercentage={20}>
                <RecentQueries/>
              </Panel>
              <CustomPanelVerticalResizeHandle/>
              <Panel defaultSizePercentage={100/3} minSizePercentage={20}>
                <AvailableQueries/>
              </Panel>
              <CustomPanelVerticalResizeHandle/>
              <Panel defaultSizePercentage={100/3} minSizePercentage={20}>
                <QueryAnalytics/>
              </Panel>
            </PanelGroup>
          </Panel>
        </PanelGroup>
        :
        null
      }
    </>
  )
}
