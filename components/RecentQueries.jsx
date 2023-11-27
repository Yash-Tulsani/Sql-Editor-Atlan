import { SqlContext } from "@/Context/SqlContext"
import { useContext } from "react"
import { Divider } from "@mui/material"

const recentQueryList=[
  {
    id: 'Query 1',
    query: 'Select * from students;'
  },
  {
    id: 'Query 1',
    query: 'Select * from students;'
  },
  {
    id: 'Query 1',
    query: 'Select * from students;'
  },
  {
    id: 'Query 1',
    query: 'Select * from students;'
  },
  {
    id: 'Query 1',
    query: 'Select * from students;'
  },
  {
    id: 'Query 1',
    query: 'Select * from students;'
  },
]

export default function RecentQueries() {
  const {theme}=useContext(SqlContext)

  const headerClassName=`recent-queries-header`+ ` `+(theme==='dark'?'recent-queries-header-dark':'recent-queries-header-light')
  const idClassName=`recent-query-id`+` `+(theme==='dark'?'recent-query-id-dark':'recent-query-id-light')
  const textClassName=`recent-query-text`+` `+(theme==='dark'?'recent-query-text-dark':'recent-query-text-light')
  const queryTabClassName=`recent-query-tab`+` `+(theme==='dark'?'recent-query-tab-dark':'recent-query-tab-light')
  const dividerClassName=`recent-query-divider`+` `+(theme==='dark'?'recent-query-divider-dark':'recent-query-divider-light')

  return (
    <div className="recent-queries-container">
      <div className={headerClassName}>
        Recent Queries
      </div>
      <div className="recent-queries-list">
        {
          recentQueryList.map((recentQuery,idx)=>{
            return (
              <div key={idx} className={queryTabClassName}>
                <div className="recent-query">
                  <div className={idClassName}>{recentQuery.id}</div>
                  <div className={textClassName}>{recentQuery.query}</div>
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
