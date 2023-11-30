import React, { useContext } from 'react'
import QueryResultTable from './QueryResultsTable'
import { SqlContext } from '@/Context/SqlContext'
import { CircularProgress } from '@mui/material'
import QueryFailed from './QueryFailed'

const QueryResultPanel = () => {

  // Global States
  const {theme,resultTableRows,setResultTableRows,isQueryExecuting,hasQueryFailed}=useContext(SqlContext)

  // Local Variables
  const queryResultPanelClassName='query-result-panel'+' '+(theme=='dark'?'query-result-panel-dark':'query-result-panel-light')
  const fallbackText='Execute a query to see results here'
  const fallbackTextClassName='query-result-panel-fallback-text'+' '+(theme=='dark'?'query-result-panel-fallback-text-dark':'query-result-panel-fallback-text-light')

  return (
    <div className={queryResultPanelClassName}>
        {

          (isQueryExecuting)?
            <div className="query-result-panel-loader">
              <CircularProgress/>
            </div>
            :
            (hasQueryFailed)?
              <QueryFailed/>
              :
              ((resultTableRows && resultTableRows.length>0)?
                <QueryResultTable/>
                :
                <div className={fallbackTextClassName}>{fallbackText}</div>
              )
        }
    </div>
  )
}

export default QueryResultPanel