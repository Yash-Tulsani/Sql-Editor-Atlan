"use client"

import Image from 'next/image'
import styles from './page.module.css'
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import SqlPlayground from '@/components/SqlPlayground';
import QueryResultPane from '@/components/QueryResultPanel';
import RecentQueries from '@/components/RecentQueries';
import AvailableQueries from '@/components/AvailableQueries';
import QueryAnalytics from '@/components/QueryAnalytics';

const CustomPanelHorizontalResizeHandle = () => {
  return (
    <PanelResizeHandle className="panel-resizer-horizontal">
      <div className={styles.resizeHandle}>
        <Image className='panel-resizer-icon' src="/assets/Images/resize-icon-horizontal.svg" width={20} height={20} alt="Resize Handle" />
      </div>
    </PanelResizeHandle>
  );
};

const CustomPanelVerticalResizeHandle = () => {
  return (
    <PanelResizeHandle className="panel-resizer-vertical">
      <div className={styles.resizeHandle}>
        <Image className='panel-resizer-icon' src="/assets/Images/resize-icon-vertical.svg" width={20} height={20} alt="Resize Handle" />
      </div>
    </PanelResizeHandle>
  );
};

export default function Home() {
  return (
    <PanelGroup direction='horizontal' className='sql-container'>
      <Panel defaultSizePercentage={60} minSizePercentage={20} className='sql-container-left-panel'>
        <PanelGroup direction='vertical' className='sql-playground-container'>
          <Panel defaultSizePercentage={40} minSizePercentage={20} >
            <SqlPlayground className='sql-playground'/>
          </Panel>
          <CustomPanelVerticalResizeHandle/>
          <Panel defaultSizePercentage={60} minSizePercentage={20}>
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
  )
}
