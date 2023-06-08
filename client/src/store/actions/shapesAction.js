import axios from "axios";

export const GetShape = (_) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/shapes`);
    const shape = res.data;
    dispatch({ type: "SET_SHAPE", shape });
  } catch (e) {
    /* no data to show right now*/
  }
};

export const ResetShape = () => async (dispatch) =>
  dispatch({ type: "SET_SHAPE", shape: "dot" });
