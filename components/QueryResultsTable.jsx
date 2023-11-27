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


const columns = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
  {
    id: 'population',
    label: 'Population',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'size',
    label: 'Size\u00a0(km\u00b2)',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'density',
    label: 'Density',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

const rows = [
  createData('India', 'IN', 1324171354, 3287263),
  createData('China', 'CN', 1403500365, 9596961),
  createData('Italy', 'IT', 60483973, 301340),
  createData('United States', 'US', 327167434, 9833520),
  createData('Canada', 'CA', 37602103, 9984670),
  createData('Australia', 'AU', 25475400, 7692024),
  createData('Germany', 'DE', 83019200, 357578),
  createData('Ireland', 'IE', 4857000, 70273),
  createData('Mexico', 'MX', 126577691, 1972550),
  createData('Japan', 'JP', 126317000, 377973),
  createData('France', 'FR', 67022000, 640679),
  createData('United Kingdom', 'GB', 67545757, 242495),
  createData('Russia', 'RU', 146793744, 17098246),
  createData('Nigeria', 'NG', 200962417, 923768),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('Brazil', 'BR', 210147125, 8515767),
];

export default function StickyHeadTable() {
  const {theme}=useContext(SqlContext)
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleDownloadBtnClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleDownloadBtnClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <Paper sx={{ width: '100%', overflow: 'auto', display:'flex', flexDirection:'column',justifyContent:'space-between', backgroundColor:'transparent' }}>
      <TableContainer sx={{height:"100%"}}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead className=''>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                  className='query-results-table-head-cells'
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code} className="query-results-table-data-row">
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align} className='query-results-table-data-cells'>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <div className='query-results-table-footer'>
        <Fab color="default" aria-label="download" size='small' onClick={handleDownloadBtnClick}>
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
          <List className='download-table-options-list'>
            <ListItem disablePadding>
              <ListItemButton sx={{gap:'0px'}}>
                <ListItemIcon>
                  {
                      theme==='dark'?(<Image src="/assets/Images/csv-icon-dark.svg" width={25} height={25}/>):(<Image src="/assets/Images/csv-icon-light.svg" width={25} height={25}/>)
                  }
                </ListItemIcon>
                <ListItemText primary="Download CSV" primaryTypographyProps={{ style: { fontSize: '0.9rem' } }} className='download-table-options-text'/>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
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
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          sx={{height:"fit-content"}}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          className='query-results-table-pagination'
        />
      </div>
    </Paper>
  );
}