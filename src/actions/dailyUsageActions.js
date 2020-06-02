export const insertDailyUsage = (data) => (dispatch) => {
  dispatch({
    type: "INSERT_DAILY_USAGE",
    payload: data,
  });
};

export const updateDailyUsage = (data) => (dispatch) => {
  dispatch({
    type: "UPDATE_DAILY_USAGE",
    payload: data,
  });
};

export const readDailyUsage = (data) => (dispatch) => {
  dispatch({
    type: "READ_DAILY_USAGE",
    payload: data,
  });
};

export const deleteDailyUsage = (data) => (dispatch) => {
  dispatch({
    type: "DELETE_DAILY_USAGE",
    payload: data,
  });
};
