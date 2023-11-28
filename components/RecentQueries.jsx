import { SqlContext } from "@/Context/SqlContext"
import { useContext } from "react"
import { Divider } from "@mui/material"

export default function RecentQueries() {
  // Global States
  const {theme,recentQueries}=useContext(SqlContext)

  // Local Variables
  const recentQueriesContainerClassName=`recent-queries-container`+` `+(theme==='dark'?'recent-queries-container-dark':'recent-queries-container-light')
  const headerClassName=`recent-queries-header`+ ` `+(theme==='dark'?'recent-queries-header-dark':'recent-queries-header-light')
  const idClassName=`recent-query-id`+` `+(theme==='dark'?'recent-query-id-dark':'recent-query-id-light')
  const textClassName=`recent-query-text`+` `+(theme==='dark'?'recent-query-text-dark':'recent-query-text-light')
  const queryTabClassName=`recent-query-tab`+` `+(theme==='dark'?'recent-query-tab-dark':'recent-query-tab-light')
  const dividerClassName=`recent-query-divider`+` `+(theme==='dark'?'recent-query-divider-dark':'recent-query-divider-light')

  return (
    <div className={recentQueriesContainerClassName}>
      <div className={headerClassName}>
        Recent Queries
      </div>
      <div className="recent-queries-list">
        {
          recentQueries.map((recentQuery,idx)=>{
            return (
              <div key={idx} className={queryTabClassName}>
                <div className="recent-query">
                  <div className={idClassName}>{recentQuery.id}</div>
                  <div className={textClassName}>{recentQuery.code}</div>
                </div>
                <Divider className={dividerClassName}/>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
