import { SqlContext } from "@/Context/SqlContext"
import { useContext, useEffect } from "react"
import { Divider } from "@mui/material"
import { queryList } from "@/public/assets/data/available-queries"

export default function AvailableQueries() {
  // Global States
  const {theme,openedQueryTabs,setOpenedQueryTabs,selectedTab,setSelectedTab}=useContext(SqlContext)

  // Local Variable
  const availableQueriesContainerClassName=`available-queries-container`+` `+(theme==='dark'?'available-queries-container-dark':'available-queries-container-light')
  const headerClassName=`available-queries-header`+ ` `+(theme==='dark'?'available-queries-header-dark':'available-queries-header-light')
  const idClassName=`available-query-id`+` `+(theme==='dark'?'available-query-id-dark':'available-query-id-light')
  const textClassName=`available-query-text`+` `+(theme==='dark'?'available-query-text-dark':'available-query-text-light')
  const queryTabClassName=`available-query-tab`+` `+(theme==='dark'?'available-query-tab-dark':'available-query-tab-light')
  const dividerClassName=`available-query-divider`+` `+(theme==='dark'?'available-query-divider-dark':'available-query-divider-light')

  // Event Handlers
  const handleQueryClick=(idx)=>{
    const query=queryList[idx];
    const queryId=queryList[idx].id;
    if(openedQueryTabs.some(obj=>obj.id==queryId)){
      const query=openedQueryTabs.find((obj)=>obj.id==queryId);
      const queryIdx=openedQueryTabs.indexOf(query);
      setSelectedTab(queryIdx);
    }
    else{
      const updatedOpenedQueryTabs=[...openedQueryTabs];
      updatedOpenedQueryTabs.push(query);
      setSelectedTab(updatedOpenedQueryTabs.length-1);
      setOpenedQueryTabs(updatedOpenedQueryTabs);
    }
  }

  return (
    <div className={availableQueriesContainerClassName}>
      <div className={headerClassName}>
        Available Queries
      </div>
      <div className="available-queries-list">
        {
          queryList.map((availableQuery,idx)=>{
            return (
              <div key={idx} className={queryTabClassName}>
                <div className="available-query" onClick={()=>handleQueryClick(idx)}>
                  <div className={idClassName}>{availableQuery.id}</div>
                  <div className={textClassName}>{availableQuery.code}</div>
                </div>
                {
                  (idx!=queryList.length-1) && 
                  <Divider className={dividerClassName}/>
                }
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
