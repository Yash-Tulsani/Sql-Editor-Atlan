import Image from 'next/image';
import { useContext } from 'react';
import { SqlContext } from '@/Context/SqlContext';

const QueryFailed = () => {
    // Global states
    const {theme} = useContext(SqlContext);

    // Local Variables
    const failedMessageHeader='Query Failed To Execute';
    const failedMessage=`Query Engine is not connected.
     \n Try running a query from "Available Queries" section.`;
    const queryFailedMessageHeaderClassName= `query-failed-message-header query-failed-message-header-${theme}`;
    const queryFailedMessageClassName= `query-failed-message query-failed-message-${theme}`;
    const queryFailedIconClassName='query-failed-icon'

  return (
    <div className='query-failed-container'>
        <Image src='/assets/Images/failed.svg' className={queryFailedIconClassName} alt='Failed' width={30} height={30}/>
        <div className="query-failed-message-container">
            <div className={queryFailedMessageHeaderClassName}>{failedMessageHeader}</div>
            <div className={queryFailedMessageClassName}>
                Query Engine is not connected.<br/>Try running a query from "Available Queries" section.
            </div>
        </div>
    </div>
  )
}

export default QueryFailed;