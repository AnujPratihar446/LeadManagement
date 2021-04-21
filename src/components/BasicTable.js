import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function BasicTable({ rows, onEdit }) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Date</TableCell>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">Phone No.</TableCell>
            <TableCell align="left">Email ID</TableCell>
            <TableCell align="left">Reference</TableCell>
            <TableCell align="left">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              {/* <TableCell component="th" scope="row">
                {row.id}
              </TableCell> */}
              <TableCell align="left">{row.date}</TableCell>
              <TableCell align="left">{row.name}</TableCell>
              <TableCell align="left">{row.phone}</TableCell>
              <TableCell align="left">{row.email}</TableCell>
              <TableCell align="left">{row.reference}</TableCell>
              <TableCell align="left">{row.status}</TableCell>
              <TableCell align="left"><EditIcon onClick={ onEdit }/></TableCell>
              <TableCell align="left"><DeleteIcon/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
