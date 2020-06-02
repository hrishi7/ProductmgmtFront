export const insertInvoiceDetails = (data) => (dispatch) => {
  dispatch({
    type: "INSERT_INVOICE_DETAILS",
    payload: data,
  });
};

export const updateInvoiceDetails = (data) => (dispatch) => {
  dispatch({
    type: "UPDATE_INVOICE_DETAILS",
    payload: data,
  });
};

export const readInvoiceDetails = (data) => (dispatch) => {
  dispatch({
    type: "READ_INVOICE_DETAILS",
    payload: data,
  });
};

export const deleteInvoiceDetails = (data) => (dispatch) => {
  dispatch({
    type: "DELETE_INVOICE_DETAILS",
    payload: data,
  });
};
