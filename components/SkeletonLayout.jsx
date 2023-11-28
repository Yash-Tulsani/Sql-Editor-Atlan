"use client"

import { Skeleton } from "@mui/material"
import { useContext } from "react"
import { SqlContext } from "@/Context/SqlContext"

const SkeletonLayout = () => {
    // Global States
    const {theme,isPageLoading}=useContext(SqlContext)
    if(!isPageLoading) return null;

    const skeletonNavClassName=`skeleton`+` `+`skeleton-nav`+` `+(theme==='dark'?'skeleton-dark':'skeleton-light')
    const skeletonCodeEditorClassName=`skeleton`+` `+`skeleton-code-editor`+` `+(theme==='dark'?'skeleton-dark':'skeleton-light')
    const skeletonResultTableClassName=`skeleton`+` `+`skeleton-result-table`+` `+(theme==='dark'?'skeleton-dark':'skeleton-light')
    const skeletonRecentQueriesClassName=`skeleton`+` `+`skeleton-recent-queries`+` `+(theme==='dark'?'skeleton-dark':'skeleton-light')
    const skeletonAvailableQueriesClassName=`skeleton`+` `+`skeleton-available-queries`+` `+(theme==='dark'?'skeleton-dark':'skeleton-light')
    const skeletonQueryAnalyticsClassName=`skeleton`+` `+`skeleton-query-analytics`+` `+(theme==='dark'?'skeleton-dark':'skeleton-light')
  return (
    <div className="skeleton-layout">
      <Skeleton className={skeletonNavClassName} variant="rounded" width="100%" height="max(35px,10vh)"/>
      <div className="skeleton-content-container">
        <div className="left-panel-skeleton-container">
          <Skeleton className={skeletonCodeEditorClassName} variant="rounded" width="calc(100% - 10px)" height="calc(50% - 5px)" />
          <Skeleton className={skeletonResultTableClassName} variant="rounded" width="calc(100% - 10px)" height="calc(50% - 5px)" />
        </div>
        <div className="right-panel-skeleton-container">
          <Skeleton className={skeletonRecentQueriesClassName} variant="rounded" width="calc(100% - 5px)" height="calc(33% - 3px)" />
          <Skeleton className={skeletonAvailableQueriesClassName} variant="rounded" width="calc(100% - 5px)" height="calc(33% - 3px)" />  
          <Skeleton className={skeletonQueryAnalyticsClassName} variant="rounded" width="calc(100% - 5px)" height="calc(33% - 3px)" />  
        </div>
      </div>
    </div>
  )
}

export default SkeletonLayout