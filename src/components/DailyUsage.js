import React, { useEffect, useState } from "react";
import {
  Grid,
  TextField,
  Divider,
  Button,
  Dialog,
  DialogTitle,
  FormControl,
} from "@material-ui/core";
import MaterialTable from "material-table";
// import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import moment from "moment";

import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";

import axios from "axios";
import { proxy } from "../proxy";
import { useSelector, useDispatch } from "react-redux";
import {
  readInvoiceDetails,
  insertInvoiceDetails,
  updateInvoiceDetails,
  deleteInvoiceDetails,
} from "../actions/invoiceDetailsActions";

const InvoiceDetails = () => {
  const dispatch = useDispatch();
  let invoiceDetails = useSelector(
    (state) => state.invoiceDetails.invoiceDetails
  );
  console.log(invoiceDetails);
  const [pageMAxSize, setPageMAxSize] = useState(5);
  const [openForm, setOpenForm] = useState(false);
  const [id, setId] = useState("");
  const [invoiceNo, setInvoiceNo] = useState("");
  const [invoiceDate, setInvoiceDate] = useState(
    moment(new Date()).format("MM/DD/YYYY")
  );
  const [partNo, setPartNo] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [sacCode, setSacCode] = useState("");
  const [qty, setQty] = useState(0);
  const [price, setPrice] = useState(0);

  useEffect(async () => {
    let response = await axios.get(`${proxy}/api/invoice-details`);
    dispatch(readInvoiceDetails(response.data));
  }, []);

  const handleInsertInvoiceDetails = async () => {
    if (allFieldsAreFilled("save")) {
      let insertData = {
        invoiceNo,
        invoiceDate: moment(invoiceDate).format("MM/DD/YYYY"),
        partNo,
        itemDescription,
        sacCode,
        qty,
        price,
      };
      /**set data */
      let response = await axios.post(
        `${proxy}/api/invoice-details`,
        insertData
      );
      alert("saved!");
      setOpenForm(false);
      dispatch(insertInvoiceDetails(response.data));
    } else {
      alert("Please Fill All Field");
    }
  };

  const allFieldsAreFilled = (type) => {
    if (type == "save") {
      if (
        invoiceNo == "" ||
        itemDescription == "" ||
        partNo == "" ||
        price == 0 ||
        qty == 0 ||
        sacCode == ""
      ) {
        return false;
      }
      return true;
    } else {
      if (
        id == "" ||
        invoiceNo == "" ||
        itemDescription == "" ||
        partNo == "" ||
        price == 0 ||
        qty == 0 ||
        sacCode == ""
      ) {
        return false;
      }
      return true;
    }
  };

  const setDataForUpdate = (rowData) => {
    setOpenForm(true);
    setId(rowData._id);
    setInvoiceNo(rowData.invoiceNo);
    setInvoiceDate(rowData.invoiceDate);
    setItemDescription(rowData.itemDescription);
    setPartNo(rowData.partNo);
    setPrice(rowData.price);
    setQty(rowData.qty);
    setSacCode(rowData.sacCode);
  };

  const handleUpdateInvoiceDetails = async () => {
    if (allFieldsAreFilled("update")) {
      let updateData = {
        invoiceNo,
        invoiceDate: moment(invoiceDate).format("MM/DD/YYYY"),
        partNo,
        itemDescription,
        sacCode,
        qty,
        price,
      };
      /**set updated data */
      let response = await axios.put(
        `${proxy}/api/invoice-details/${id}`,
        updateData
      );
      alert("Updated!");
      setOpenForm(false);
      response = await axios.get(`${proxy}/api/invoice-details`);
      dispatch(readInvoiceDetails(response.data));
      // dispatch(updateInvoiceDetails(response.data));
    } else {
      alert("Please Fill All Field");
    }
  };

  const handleDeleteInvoiceDetails = async (id) => {
    await axios.delete(`${proxy}/api/invoice-details/${id}`);
    alert("Deleted!");
    setOpenForm(false);
    dispatch(deleteInvoiceDetails(id));
  };

  const renderColumns = () => {
    return [
      { title: "Invoice No", field: "invoiceNo" },
      { title: "Invoice Date", field: "invoiceDate" },
      { title: "Part No", field: "partNo" },
      { title: "Description", field: "itemDescription" },
      { title: "SAC Code", field: "sacCode" },
      { title: "Qty", field: "qty" },
      { title: "Stock", field: "stock" },
      { title: "Price", field: "price" },
    ];
  };

  const renderData = () => {
    return invoiceDetails.length > 0
      ? invoiceDetails.map((invoiceDetail) => {
          return {
            invoiceNo: invoiceDetail.invoiceNo,
            invoiceDate: invoiceDetail.invoiceDate,
            partNo: invoiceDetail.partNo,
            itemDescription: invoiceDetail.itemDescription,
            sacCode: invoiceDetail.sacCode,
            qty: invoiceDetail.qty,
            stock: invoiceDetail.stock,
            price: invoiceDetail.price,
            _id: invoiceDetail._id,
          };
        })
      : [];
  };

  const renderActions = () => {
    return [
      (rowData) => ({
        icon: "edit",
        tooltip: "Edit invoice",
        onClick: () => setDataForUpdate(rowData),
      }),
      (rowData) => ({
        icon: "delete",
        tooltip: "Delete invoice",
        onClick: () => handleDeleteInvoiceDetails(rowData._id),
      }),
    ];
  };

  const renderOptions = () => {
    return {
      actionsColumnIndex: -1,
      pageSize: pageMAxSize,
    };
  };

  const handleClose = () => {
    setOpenForm(false);
    handleClear();
  };

  const handleClear = () => {
    setId("");
    setInvoiceNo("");
    setInvoiceDate(moment(new Date()).format("MM/DD/YYYY"));
    setItemDescription("");
    setPartNo("");
    setPrice(0);
    setQty(0);
    setSacCode("");
  };

  return (
    <Grid container direction="column">
      <Grid
        style={{
          padding: "10px",
          margin: "5px",
        }}
      >
        <Button
          variant="outlined"
          onClick={() => {
            handleClear();
            setOpenForm(true);
          }}
        >
          Add Details
        </Button>
      </Grid>
      <Dialog
        fullWidth={true}
        maxWidth={"md"}
        onClose={handleClose}
        aria-labelledby="simple-dialog-title"
        open={openForm}
      >
        <DialogTitle id="simple-dialog-title">
          <center>Add Invoice Detail</center>
        </DialogTitle>
        <Divider />
        <FormControl>
          <TextField
            style={{
              marginLeft: "30%",
              marginRight: "30%",
              marginBottom: "4px",
            }}
            variant="standard"
            value={invoiceNo}
            onChange={(e) => setInvoiceNo(e.target.value)}
            label="Invoice No"
          />
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              style={{
                marginLeft: "30%",
                marginRight: "30%",
                marginBottom: "4px",
              }}
              margin="normal"
              id="date-picker-dialog"
              label="Invoice Date"
              format="MM/dd/yyyy"
              value={invoiceDate}
              onChange={(date) => setInvoiceDate(date)}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
          </MuiPickersUtilsProvider>
          <TextField
            disabled={id ? true : false}
            style={{
              marginLeft: "30%",
              marginRight: "30%",
              marginBottom: "4px",
            }}
            variant="standard"
            value={partNo}
            onChange={(e) => setPartNo(e.target.value)}
            label="Part No"
          />
          <TextField
            style={{
              marginLeft: "30%",
              marginRight: "30%",
              marginBottom: "4px",
            }}
            disabled={id ? true : false}
            variant="standard"
            value={itemDescription}
            onChange={(e) => setItemDescription(e.target.value)}
            label="Item Description"
          />
          <TextField
            style={{
              marginLeft: "30%",
              marginRight: "30%",
              marginBottom: "4px",
            }}
            disabled={id ? true : false}
            variant="standard"
            value={sacCode}
            onChange={(e) => setSacCode(e.target.value)}
            label="SAC Code"
          />
          <TextField
            style={{
              marginLeft: "30%",
              marginRight: "30%",
              marginBottom: "4px",
            }}
            disabled={id ? true : false}
            variant="standard"
            value={qty}
            onChange={(e) => setQty(e.target.value)}
            label="Quantity"
            type="Number"
          />
          <TextField
            style={{
              marginLeft: "30%",
              marginRight: "30%",
              marginBottom: "4px",
            }}
            disabled={id ? true : false}
            variant="standard"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            label="Price"
            type="Number"
          />
        </FormControl>
        <center>
          {id != "" ? (
            <Button
              variant="outlined"
              color="primary"
              style={{ marginBottom: "5px" }}
              onClick={() => handleUpdateInvoiceDetails()}
            >
              UPDATE
            </Button>
          ) : (
            <Button
              variant="outlined"
              color="primary"
              style={{ marginBottom: "5px" }}
              onClick={() => handleInsertInvoiceDetails()}
            >
              SAVE
            </Button>
          )}
        </center>
      </Dialog>

      <Grid
        style={{
          padding: "10px",
          margin: "5px",
        }}
      >
        <MaterialTable
          title="Invoice Details"
          columns={renderColumns()}
          data={renderData()}
          actions={renderActions()}
          options={renderOptions()}
        />
      </Grid>
    </Grid>
  );
};
export default InvoiceDetails;
