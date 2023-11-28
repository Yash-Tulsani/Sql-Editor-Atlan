"use client"

import {createContext, useState} from 'react'

export const SqlContext=createContext()

const SqlContextComponent=(props)=>{
    // States
    const [isPageLoading,setIsPageLoading]=useState(true);
    const [theme,setTheme]=useState('light');
    const [openedQueryTabs,setOpenedQueryTabs]=useState([]);
    const [selectedTab,setSelectedTab]=useState(null);
    const [resultTableHeaders,setResultTableHeaders]=useState([]);
    const [resultTableRows,setResultTableRows]=useState([]);
    const [tableName,setTableName]=useState(null);
    const [recentQueries,setRecentQueries]=useState([]);
    const [editorCode,setEditorCode]=useState("-- Write your SQL code here")
    const [queryAnalytics,setQueryAnalytics]=useState({
        status: 'Not Executed',
        timeToLoad: 'N/A',
        rowsReturned: 'N/A',
        rowsAffected: 'N/A',
    });
    const [isQueryExecuting,setIsQueryExecuting]=useState(false); 
    const [hasQueryFailed,setHasQueryFailed]=useState(false);

    // Local Variables
    const states={theme,setTheme,openedQueryTabs,setOpenedQueryTabs,selectedTab,setSelectedTab,resultTableHeaders,setResultTableHeaders,resultTableRows,setResultTableRows,tableName,setTableName,
    recentQueries,setRecentQueries,editorCode,setEditorCode,queryAnalytics,setQueryAnalytics,isQueryExecuting,setIsQueryExecuting,isPageLoading,setIsPageLoading,hasQueryFailed,setHasQueryFailed}

    return (
        <SqlContext.Provider value={states}>
            {props.children}
        </SqlContext.Provider>
    )
}


export default SqlContextComponent;