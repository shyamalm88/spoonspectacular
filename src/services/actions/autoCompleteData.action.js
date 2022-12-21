import { API } from "../api/api";
import {
  LOAD_AUTOCOMPLETE_INITIATED,
  LOAD_AUTOCOMPLETE_SUCCESS,
  LOAD_AUTOCOMPLETE_ERROR,
} from "../types/types";

export const fetchAutoCompleteData = (options) => {
  return function (dispatch, getState) {
    dispatch(autoCompleteLoadAction());
    API.get("recipes/autocomplete", { params: options })
      .then((res) => {
        dispatch(autoCompleteSuccessAction(res.data));
      })
      .catch((err) => {
        dispatch(autoCompleteErrorAction(err));
      });
  };
};

export const autoCompleteLoadAction = () => {
  return {
    type: LOAD_AUTOCOMPLETE_INITIATED,
  };
};

export const autoCompleteSuccessAction = (payload) => {
  return {
    type: LOAD_AUTOCOMPLETE_SUCCESS,
    payload: payload,
  };
};

export const autoCompleteErrorAction = (payload) => {
  return {
    type: LOAD_AUTOCOMPLETE_ERROR,
    payload: payload,
  };
};
