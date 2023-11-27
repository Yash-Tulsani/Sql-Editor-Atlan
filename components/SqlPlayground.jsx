"use client"

import { useEffect, useState } from "react"
import QueryTab from "./QueryTab"
import Image from "next/image"
import SQLCodeEditor from "./SqlCodeEditor"

const initialQueries=[
    {
        id: 1,
        name: "Query 100"
    },
    {
        id:2,
        name: "Query 100"
    },
    {
        id:3,
        name: "Query 100"
    },
    {
        id:4,
        name: "Query 100"
    },
    {
        id:5,
        name: "Query 100"
    },
    {
        id:6,
        name: "Query 100"
    },
    {
        id:7,
        name: "Query 100"
    },
    {
        id:8,
        name: "Query 100"
    },
]

const SqlPlayground = () => {
    // Local States
    const [queries,setQueries]=useState(initialQueries);
    const [activeTabs,setActiveTabs]=useState(new Array(initialQueries.length).fill(false))

    // Side Effects
    useEffect(()=>{
        console.log(queries);
    },[queries]);

    // Handlers
    const handleCloseTab=(idx)=>{
        const updatedQueries=[...queries];
        updatedQueries.splice(idx,1);
        console.log(updatedQueries,queries)
        setQueries(updatedQueries);
    }
  return (
    <div className="sql-playground">
        <div className="sql-playground-options-panel">
            <div className="sql-playground-tabs-panel">
                {
                    queries.length!=0 && <div className="sql-playground-tabs">
                    {
                        queries.map((query,idx)=>{
                            return <QueryTab key={query.id} query={query} idx={idx} handleCloseTab={handleCloseTab} activeTabs={activeTabs} setActiveTabs={setActiveTabs}/>
                        })
                    }
                </div>
                }
                <div className="sql-playground-add-tab-btn">
                    <Image src="/assets/Images/dark-mode-add-tab.svg" className="sql-playground-add-tab-icon" width={20} height={20} alt="Add Tab"/>
                </div>
            </div>
            <div className="sql-playground-buttons-panel">
                <div className="sql-playground-execute-btn">Execute</div>
                <div className="sql-playground-clear-btn">Clear</div>
            </div>
        </div>
        <SQLCodeEditor/>
    </div>
  )
}

export default SqlPlayground