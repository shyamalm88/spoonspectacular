import { API } from "../api/api";
import {
  LOAD_RANDOM_INITIATED,
  LOAD_RANDOM_SUCCESS,
  LOAD_RANDOM_ERROR,
} from "../types/types";

export const fetchRandomData = (options) => {
  return function (dispatch, getState) {
    dispatch(randomLoadAction());
    API.get("recipes/random", { params: options })
      .then((res) => {
        dispatch(randomSuccessAction(res.data.recipes));
      })
      .catch((err) => {
        dispatch(randomErrorAction(err));
      });
  };
};

export const randomLoadAction = () => {
  return {
    type: LOAD_RANDOM_INITIATED,
  };
};

export const randomSuccessAction = (payload) => {
  return {
    type: LOAD_RANDOM_SUCCESS,
    payload: payload,
  };
};

export const randomErrorAction = (payload) => {
  return {
    type: LOAD_RANDOM_ERROR,
    payload: payload,
  };
};
