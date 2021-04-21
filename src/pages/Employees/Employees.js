import { useState } from "react";
import BasicTable from "../../components/BasicTable";
import EmployeeForm from "./EmployeeForm";
import PageHeader from "../../components/PageHeader";
import Popup from "../../components/Popup";
import PeopleIcon from "@material-ui/icons/People";
import { Search } from "@material-ui/icons";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import CloseIcon from "@material-ui/icons/Close";
import AddIcon from "@material-ui/icons/Add";
import {
  InputAdornment,
  makeStyles,
  MenuItem,
  Paper,
  TableBody,
  TableCell,
  TableRow,
  Toolbar,
} from "@material-ui/core";
import useTable from "../../components/useTable";
import Controls from "../../components/controls/Controls";
import { resetForm } from "../../components/UseForm";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
  newButton: {
    position: "absolute",
    right: "120px",
    top: "270px",
  },
  searchInput: {
    width: "75%",
  },
}));

const Employees = () => {
  // STATE
  const [openPopup, setOpenPopup] = useState(false);
  const [rows, setRows] = useState([]);
  const [rowEdit, setRowEdit] = useState(null);
  const [filterFn, setFilterFn] = useState({
    fn: (items) => {
      return items;
    },
  });

  // STYLING
  const classes = useStyles();

  // TABLE HEAD
  const headCells = [
    { id: "date", label: "Date" },
    { id: "name", label: "Name", width: 70 },
    { id: "phone", label: "Phone No.", disableSorting: true },
    { id: "email", label: "Email Address", disableSorting: true },
    { id: "reference", label: "Reference" },
    { id: "status", label: "Status" },
    { id: "loanType", label: "Loan Type" },
    { id: "loanAmount", label: "Loan Amount" },
    { id: "bankName", label: "Bank Name" },
    { id: "builderName", label: "Builder Name" },
    { id: "remarks", label: "Remarks", disableSorting: true },
    { id: "actions", label: "Actions", disableSorting: true },
  ];

  // TABLE
  const {
    TblContainer,
    TblHead,
    rowsAfterPagingAndSorting,
    TblPagination,
  } = useTable(rows, headCells, filterFn);

  // ADDING VALUES INTO DATABASE
  const addRow = (values) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newRow = { id, ...values };
    setRows([...rows, newRow]);
  };

  const updateRow = (values) => {
    let rowCopy = rows;
    let itemIndex = rows.findIndex((x) => x.id == values.id);
    rowCopy[itemIndex] = values;
    setRows(rowCopy);
  };

  const onDelete = (id) => {
    if (window.confirm("Confirm Delete?"))
      setRows(rows.filter((item) => item.id !== id));
  };

  const addOrEdit = (values, resetForm) => {
    if (values.id == null) addRow(values);
    else updateRow(values);
    resetForm();
    setRowEdit(null);
    setOpenPopup(false);
  };

  // OPEN IN POPUP FUNCTION
  const openInPopup = (item) => {
    setRowEdit(item);
    setOpenPopup(true);
  };

  const handleSearch = (e) => {
    let target = e.target;
    setFilterFn({
      fn: (items) => {
        if (target.value == "") return items;
        else
          return items.filter((x) =>
            x.name.toLowerCase().includes(target.value)
          );
      },
    });
  };

  return (
    <>
      <PageHeader
        title="Leads Data Table"
        subtitle="Click on the 'New Entry' button to add entries "
        icon={<PeopleIcon fontSize="large" />}
      />
      <Paper className={classes.pageContent}>
        <Toolbar>
          <Controls.Input
            className={classes.searchInput}
            label="Search Entries"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
            onChange={handleSearch}
          />
        </Toolbar>
        <Controls.Button
          text="New Entry"
          variant="outlined"
          startIcon={<AddIcon />}
          className={classes.newButton}
          onClick={() => {
            setOpenPopup(true);
            setRowEdit(null);
          }}
        />
        <TblContainer>
          <TblHead />
          <TableBody>
            {rowsAfterPagingAndSorting().map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.date.toDateString()}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.phone}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.reference}</TableCell>
                <TableCell>{item.status}</TableCell>
                <TableCell>{item.loanType}</TableCell>
                <TableCell>{item.loanAmount}</TableCell>
                <TableCell>{item.bankName}</TableCell>
                <TableCell>{item.builderName}</TableCell>
                <TableCell>{item.remarks}</TableCell>
                <TableCell>
                  <Controls.ActionButton color="primary">
                    <EditOutlinedIcon
                      fontSize="small"
                      onClick={() => {
                        openInPopup(item);
                      }}
                    />
                  </Controls.ActionButton>
                  <Controls.ActionButton
                    color="primary"
                    onClick={() => onDelete(item.id)}
                  >
                    <CloseIcon fontSize="small" />
                  </Controls.ActionButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TblContainer>
        <TblPagination />
      </Paper>
      <Popup
        title="New Entry"
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        <EmployeeForm
          // onAdd={addRow}
          addOrEdit={addOrEdit}
          popup={setOpenPopup}
          rowEdit={rowEdit}
          updateRow={updateRow}
        />
      </Popup>
    </>
  );
};

export default Employees;
