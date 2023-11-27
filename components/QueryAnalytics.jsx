import { SqlContext } from "@/Context/SqlContext"
import { useContext } from "react"

const analyticsList=[
  {
    name: 'Status',
    data: 'Succeeded'
  },
  {
    name: 'Time to load',
    data: '658ms'
  },
  {
    name: 'Rows Returned',
    data: 'NA'
  },
  {
    name: 'Rows Affected',
    data: 'NA'
  },
  
]

export default function QueryAnalytics() {
  const {theme}=useContext(SqlContext)

  const headerClassName=`query-analytics-header`+ ` `+(theme==='dark'?'query-analytics-header-dark':'query-analytics-header-light')
  const idClassName=`query-analytics-id`+` `+(theme==='dark'?'query-analytics-id-dark':'query-analytics-id-light')
  const textClassName=`query-analytics-text`+` `+(theme==='dark'?'query-analytics-text-dark':'query-analytics-text-light')
  const analyticClassName=`query-analytic`+` `+(theme==='dark'?'query-analytic-dark':'query-analytic-light')
  
  return (
    <div className="query-analytics-container">
      <div className={headerClassName}>
        QueryAnalytics
      </div>
      <div className="query-analytics-list">
        {
          analyticsList.map((analytics,idx)=>{
            return (
                <div className={analyticClassName} key={idx}>
                    <div className={idClassName}>
                        {analytics.name}
                    </div>
                    <div className={textClassName}>
                        {analytics.data}
                    </div>
                </div>
            )
          })
        }
      </div>
    </div>
  )
}
