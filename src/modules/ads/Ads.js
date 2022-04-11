import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";




import { BiBlock } from "react-icons/bi";
import { VscError } from "react-icons/vsc";
import { MdOutlineGppGood } from "react-icons/md";
import SimpleLoader from '../../commonComponents/SimpleLoader';
import { AiOutlineDelete } from "react-icons/ai";

import "./AdsStyle.css"

import { UseAds } from './UseAds';






function Ads() {

  const [
    allAds,
    columns,
    adsLoading,
    ctaAdActive,
    ctaTempBlockAd,
    ctaPermBlockAd,
    ctaDeleteAd,
  ] = UseAds();


  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(4);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div className="adminMain">
      <Container>
        <Typography className="Typo-welcome Typo-Admin" variant="h6">
          All Ads
          <Typography className="Typo-welcome">
            {/* Welcome Back&nbsp; <span className='adminsName'>Admin 😀 */}

            {/* </span> */}
            <Typography className="Typo-welcome" style={{ textAlign: "right" }}>
              {/* Date : {new Date().toISOString().split("T")[0]} &nbsp; */}
            </Typography>
          </Typography>
        </Typography>
      </Container>

      <br />
      <Container>
        <Divider />
        <br />
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                      className="adminTableHeading"
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              {adsLoading ? (
                <>
                  <br />
                  <SimpleLoader color={"#29ab87"} size={50} />
                  <br />
                </>
              ) : (
                <TableBody>
                  {allAds
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                      return (
                        <TableRow
                          hover
                          role="checkbox"
                          tabIndex={-1}
                          key={row.id}
                        >
                          <TableCell className="txtCap">{row.name}</TableCell>
                          <TableCell className="txtCap">{row.userId}</TableCell>
                          <TableCell className="txtCap">{row.email}</TableCell>
                          <TableCell className="txtCap">
                            {row.vehicleType}
                          </TableCell>
                          <TableCell className="txtCap">
                            {row.cardStatus}
                          </TableCell>
                          <TableCell className="txtCap">
                            <MdOutlineGppGood
                              className="toActive1"
                              title="Click To Active"
                              onClick={() => {
                                ctaAdActive(row.id);
                              }}
                            />
                            <BiBlock
                              className="toActive"
                              title="Click To Temp Block"
                              onClick={() => {
                                ctaTempBlockAd(row.id);
                              }}
                            />
                            <VscError
                              className="toActive"
                              title="Click To Perm Block"
                              onClick={() => {
                                ctaPermBlockAd(row.id);
                              }}
                            />
                            <AiOutlineDelete
                              className="toActive"
                              title="Click To Delete"
                              onClick={() => {
                                ctaDeleteAd(row.id);
                              }}
                            />
                          </TableCell>
                        </TableRow>
                      );
                    })}
                </TableBody>
              )}
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 15]}
            component="div"
            count={allAds.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </Container>
    </div>
  );
}

export default Ads