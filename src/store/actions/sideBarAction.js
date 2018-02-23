export const fetchSchedules = () => dispatch => {
  dispatch({
    type: FETCH_SCHEDULES,
    payload: request
      .get("schedules")
      .then(response => {
        dispatch(addNotification("Schedules successfully loaded!", "success"));
        return response.data;
      })
      .catch(error => {})
  });
};

export const setPrimaryMenu = primaryMenu => ({
  type: "SET_PRIMARY_MENU",
  primaryMenu
});