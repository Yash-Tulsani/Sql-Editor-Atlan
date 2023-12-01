import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Fab } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import Popover from '@mui/material/Popover';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Image from 'next/image'
import { useContext } from 'react';
import { SqlContext } from '@/Context/SqlContext';
import { mergeObject } from '@/utils/helpers';
import useDownloader from 'react-use-downloader';


export default function QueryResultsTable() {
  // Global States
  const {theme,resultTableHeaders,resultTableRows,tableName}=useContext(SqlContext)

  // Local States
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const {download}= useDownloader();

  // Event Handlers
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleDownloadCSV= ()=>{
    const fileUrl=`assets/data/csv/${tableName}.csv`;
    const fileName=`${tableName}.csv`;
    download(fileUrl,fileName);
  }

  const handleDownloadJSON= ()=>{
    const fileUrl=`assets/data/json/${tableName}.json`;
    const fileName=`${tableName}.json`;
    download(fileUrl,fileName);
  }

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleDownloadBtnClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleDownloadBtnClose = () => {
    setAnchorEl(null);
  };

  // Local Variables
  const resultTableHeadersClassName=`query-results-table-head-cells ${theme==='dark'?'query-results-table-head-cells-dark':'query-results-table-head-cells-light'}`
  const resultTableRowsClassName=`query-results-table-data-row ${theme==='dark'?'query-results-table-data-row-dark':'query-results-table-data-row-light'}`
  const resultTableDataCellsClassName=`query-results-table-data-cells ${theme==='dark'?'query-results-table-data-cells-dark':'query-results-table-data-cells-light'}`
  const resultTableFooterClassName=`query-results-table-footer ${theme==='dark'?'query-results-table-footer-dark':'query-results-table-footer-light'}`
  const resultTablePaginationClassName=`query-results-table-pagination ${theme==='dark'?'query-results-table-pagination-dark':'query-results-table-pagination-light'}`
  const downloadTableOptionsListClassName=`download-table-options-list ${theme==='dark'?'download-table-options-list-dark':'download-table-options-list-light'}`
  const downloadButtonClassName=`download-button ${theme==='dark'?'download-button-dark':'download-button-light'}`

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <Paper sx={{ width: '100%', overflow: 'auto', display:'flex', flexDirection:'column',justifyContent:'space-between', backgroundColor:'transparent' }}>
      <TableContainer sx={{height:"100%"}}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead className=''>
            <TableRow>
              {resultTableHeaders.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                  className={resultTableHeadersClassName}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {resultTableRows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row,idx) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={idx} className={resultTableRowsClassName}>
                    {resultTableHeaders.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align} className={resultTableDataCellsClassName}>
                          {mergeObject(value)}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <div className={resultTableFooterClassName}>
        <Fab color="default" aria-label="download" className={downloadButtonClassName}  size='small' onClick={handleDownloadBtnClick}>
          <DownloadIcon/>
        </Fab>  
        <Popover 
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleDownloadBtnClose}
          sx={{zIndex:100}}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
        >
          <List className={downloadTableOptionsListClassName}>
            <ListItem disablePadding onClick={handleDownloadCSV}>
              <ListItemButton sx={{gap:'0px'}}>
                <ListItemIcon>
                  {
                      theme==='dark'?(<Image src="/assets/Images/csv-icon-dark.svg" width={25} height={25}/>):(<Image src="/assets/Images/csv-icon-light.svg" width={25} height={25}/>)
                  }
                </ListItemIcon>
                <ListItemText primary="Download CSV" primaryTypographyProps={{ style: { fontSize: '0.9rem' } }} className='download-table-options-text'/>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding onClick={handleDownloadJSON}>
              <ListItemButton>
                <ListItemIcon>
                  {
                    theme==='dark'?(<Image src="/assets/Images/json-icon-dark.svg" width={25} height={25}/>):(<Image src="/assets/Images/json-icon-light.svg" width={25} height={25}/>)
                  }
                </ListItemIcon>
                <ListItemText primary='Download JSON' primaryTypographyProps={{ style: { fontSize: '0.9rem' } }} className='download-table-options-text'/>
              </ListItemButton>
            </ListItem>
          </List>
        </Popover>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={resultTableRows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          sx={{height:"fit-content"}}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          className={resultTablePaginationClassName}
        />
      </div>
    </Paper>
  );
}