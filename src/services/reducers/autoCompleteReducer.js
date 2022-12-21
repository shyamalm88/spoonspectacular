import {
  LOAD_AUTOCOMPLETE_INITIATED,
  LOAD_AUTOCOMPLETE_SUCCESS,
  LOAD_AUTOCOMPLETE_ERROR,
} from "../types/types";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const autoCompleteDataReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_AUTOCOMPLETE_INITIATED:
      return {
        ...state,
        loading: true,
      };

    case LOAD_AUTOCOMPLETE_SUCCESS:
      return {
        loading: false,
        data: payload,
        error: "",
      };

    case LOAD_AUTOCOMPLETE_ERROR:
      return {
        loading: false,
        data: [],
        error: payload,
      };

    default:
      return state;
  }
};

export default autoCompleteDataReducer;
