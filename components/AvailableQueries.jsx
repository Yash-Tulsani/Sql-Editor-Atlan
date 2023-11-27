import { SqlContext } from "@/Context/SqlContext"
import { useContext } from "react"
import { Divider } from "@mui/material"

const availableQueryList=[
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

export default function AvailableQueries() {
  const {theme}=useContext(SqlContext)

  const headerClassName=`available-queries-header`+ ` `+(theme==='dark'?'available-queries-header-dark':'available-queries-header-light')
  const idClassName=`available-query-id`+` `+(theme==='dark'?'available-query-id-dark':'available-query-id-light')
  const textClassName=`available-query-text`+` `+(theme==='dark'?'available-query-text-dark':'available-query-text-light')
  const queryTabClassName=`available-query-tab`+` `+(theme==='dark'?'available-query-tab-dark':'available-query-tab-light')
  const dividerClassName=`available-query-divider`+` `+(theme==='dark'?'available-query-divider-dark':'available-query-divider-light')

  return (
    <div className="available-queries-container">
      <div className={headerClassName}>
        Available Queries
      </div>
      <div className="available-queries-list">
        {
          availableQueryList.map((availableQuery,idx)=>{
            return (
              <div key={idx} className={queryTabClassName}>
                <div className="available-query">
                  <div className={idClassName}>{availableQuery.id}</div>
                  <div className={textClassName}>{availableQuery.query}</div>
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
