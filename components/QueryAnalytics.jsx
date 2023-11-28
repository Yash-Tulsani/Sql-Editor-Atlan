import { SqlContext } from "@/Context/SqlContext"
import { useContext } from "react"
import { camelCaseToSentenceCase } from "@/utils/helpers"

export default function QueryAnalytics() {
  // Global States
  const {theme,queryAnalytics}=useContext(SqlContext)

  // Local Variables
  const queryAnalyticsContainerClassName=`query-analytics-container`+` `+(theme==='dark'?'query-analytics-container-dark':'query-analytics-container-light')
  const headerClassName=`query-analytics-header`+ ` `+(theme==='dark'?'query-analytics-header-dark':'query-analytics-header-light')
  const idClassName=`query-analytics-id`+` `+(theme==='dark'?'query-analytics-id-dark':'query-analytics-id-light')
  const textClassName=`query-analytics-text`+` `+(theme==='dark'?'query-analytics-text-dark':'query-analytics-text-light')
  const analyticClassName=`query-analytic`+` `+(theme==='dark'?'query-analytic-dark':'query-analytic-light')
  
  return (
    <div className={queryAnalyticsContainerClassName}>
      <div className={headerClassName}>
        Query Analytics
      </div>
      <div className="query-analytics-list">
        {
          Object.entries(queryAnalytics).map((analytics,idx)=>{
            return (
                <div className={analyticClassName} key={idx}>
                    <div className={idClassName}>
                        {camelCaseToSentenceCase(analytics[0])}
                    </div>
                    <div className={textClassName}>
                        {analytics[1]}
                    </div>
                </div>
            )
          })
        }
      </div>
    </div>
  )
}
