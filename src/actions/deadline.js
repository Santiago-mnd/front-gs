import { fetchConToken } from "../helpers/fetch";
import { types } from "../types/types";

export const deadlineStartAddNew = (deadline) => {
  return async (dispatch, getState) => {
    const { uid, name } = getState().auth;

    try {
      const resp = await fetchConToken(
        "deadlines/new-deadline",
        deadline,
        "POST"
      );
      const body = await resp.json();

      if (body.ok) {
        deadline.id = body.deadline.id;
        deadline.user = {
          _id: uid,
          name,
        };
        dispatch(addNewDeadline(deadline));
      }
    } catch (error) {}
  };
};

const addNewDeadline = (deadline) => ({
  type: types.deadlineAddNew,
  payload: deadline,
});

export const deadlineStartLoading = () => {
  return async (dispatch) => {
    try {
      const resp = await fetchConToken("deadlines");
      const { deadlines } = await resp.json();
      dispatch(deadlinesLoaded(deadlines));
    } catch (error) {}
  };
};

const deadlinesLoaded = (deadlines) => ({
  type: types.deadlineLoaded,
  payload: deadlines,
});
