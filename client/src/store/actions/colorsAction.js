import axios from "axios";

export const GetColor = (_) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/colors`);
    const color = res.data;
    dispatch({ type: "SET_COLOR", color });
  } catch (e) {
    /* no data to show right now*/
  }
};

export const ResetColor = () => async (dispatch) =>
  dispatch({ type: "SET_COLOR", color: "transparent" });
