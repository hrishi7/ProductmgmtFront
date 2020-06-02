import isEmpty from "../utils/isEmpty";
const initialState = {
  invoiceDetails: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "INSERT_INVOICE_DETAILS":
      return {
        ...state,
        invoiceDetails: [action.payload, ...state.invoiceDetails],
      };
    case "UPDATE_INVOICE_DETAILS":
      return {
        ...state,
        invoiceDetails: state.invoiceDetails.map((element, index) => {
          if (element._id == action.payload._id) {
            return action.payload;
          }
        }),
      };
    case "READ_INVOICE_DETAILS":
      return {
        ...state,
        invoiceDetails: action.payload,
      };
    case "DELETE_INVOICE_DETAILS":
      return {
        ...state,
        invoiceDetails: state.invoiceDetails.filter(
          (item) => item._id !== action.payload
        ),
      };
    default:
      return state;
  }
}
