"use client"

import { useEffect, useState, useContext } from "react"
import QueryTab from "./QueryTab"
import Image from "next/image"
import SQLCodeEditor from "./SqlCodeEditor"
import { SqlContext } from "@/Context/SqlContext"
import { delay } from "@/utils/helpers"

const SqlPlayground = () => {
    // Local States

    // Global states
    const {theme,openedQueryTabs,setOpenedQueryTabs,selectedTab,setSelectedTab,setResultTableHeaders,setResultTableRows,setTableName,recentQueries,setRecentQueries,
    setQueryAnalytics,setIsQueryExecuting,setEditorCode}=useContext(SqlContext);

    // Local Variables
    const SqlPlaygroundClassName=`sql-playground ${theme==='dark'?'sql-playground-dark':'sql-playground-light'}`
    const fallackTextClassName=`sql-editor-fallback-text ${theme==='dark'?'sql-editor-fallback-text-dark':'sql-editor-fallback-text-light'}` 

    // Handlers
    const handleCloseTab=(idx)=>{
        const updatedOpenedQueryTabs=[...openedQueryTabs];
        updatedOpenedQueryTabs.splice(idx,1);
        // console.log(updatedQueries,queries)
        setOpenedQueryTabs(updatedOpenedQueryTabs);
        if(selectedTab==idx){
            setSelectedTab(updatedOpenedQueryTabs.length-1);
        }
    }

    const handleAddTabClick=()=>{
        console.log('Add Tab Clicked')
        const updatedOpenedQueryTabs=[...openedQueryTabs];
        const newQuery={
                id: 'Query '+(50+Math.floor(Math.random()*50)),
                code: "-- Write your SQL code here",
                resultFilePath: '',
                status: 'Failed',
                timeToLoad: 'N/A',
                rowsReturned: 'N/A',
                rowsAffected: 'N/A'
        }
        updatedOpenedQueryTabs.push(newQuery);
        setOpenedQueryTabs(updatedOpenedQueryTabs);
        setSelectedTab(updatedOpenedQueryTabs.length-1);
    }


    const handleQueryExecute=async ()=>{
        if(openedQueryTabs.length==0){
            return;
        }
        setIsQueryExecuting(true);
        let updatedQueryAnalytics={
            status: 'Executing',
            timeToLoad: `N/A`,  
            rowsReturned: `N/A`,
            rowsAffected: 'N/A'
        }
        setQueryAnalytics(updatedQueryAnalytics);
        await delay(1500);

        const query=openedQueryTabs[selectedTab];
        const currentTableName=query.tableName;
        setTableName(currentTableName);

        const columnHeaders=query.resultColumns;
        setResultTableHeaders(columnHeaders);

        const url=`/assets/data/json/${currentTableName}.json`;
        const res=await fetch(url);
        const  resultRows=await res.json();
        setResultTableRows(resultRows);

        const updatedRecentQueries=[...recentQueries];
        updatedRecentQueries.unshift(query);
        setRecentQueries(updatedRecentQueries);

        updatedQueryAnalytics={
            status: 'Succeeded',
            timeToLoad: `${101+Math.floor(Math.random()*899)}ms`,
            rowsReturned: `${resultRows.length}`,
            rowsAffected: 0
        }
        setQueryAnalytics(updatedQueryAnalytics);
        setIsQueryExecuting(false);
    }

    const handleClearCode=()=>{
       setEditorCode("-- Write your SQL code here");
    }

  return (
    <div className={SqlPlaygroundClassName}>
        <div className="sql-playground-options-panel">
            <div className="sql-playground-tabs-panel">
                {
                    openedQueryTabs.length!=0 && <div className="sql-playground-tabs">
                    {
                        openedQueryTabs.map((query,idx)=>{
                            return <QueryTab key={query.id} query={query} idx={idx} handleCloseTab={handleCloseTab}/>
                        })
                    }
                </div>
                }
                <div className="sql-playground-add-tab-btn" onClick={handleAddTabClick}>
                    <Image src={`/assets/Images/${theme}-mode-add-tab.svg`} className="sql-playground-add-tab-icon" width={20} height={20} alt="Add Tab"/>
                </div>
            </div>
            <div className="sql-playground-buttons-panel">
                <div className={`sql-playground-execute-btn ${openedQueryTabs.length==0?'sql-playground-btn-disabled':''}`} onClick={handleQueryExecute}>Execute</div>
                <div className={`sql-playground-clear-btn ${openedQueryTabs.length==0?'sql-playground-btn-disabled':''}`} onClick={handleClearCode}>Clear</div>
            </div>
        </div>
        {openedQueryTabs.length>0?
            <SQLCodeEditor className='sql-editor'/>
            :
            <div className={fallackTextClassName}>Pick a query from 'Available Queries' Section by clicking on it</div>
        }
    </div>
  )
}

export default SqlPlayground