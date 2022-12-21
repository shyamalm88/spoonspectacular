import {
  LOAD_RANDOM_INITIATED,
  LOAD_RANDOM_SUCCESS,
  LOAD_RANDOM_ERROR,
} from "../types/types";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const randomDataReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_RANDOM_INITIATED:
      return {
        ...state,
        loading: true,
      };

    case LOAD_RANDOM_SUCCESS:
      return {
        loading: false,
        data: payload,
        error: "",
      };

    case LOAD_RANDOM_ERROR:
      return {
        loading: false,
        data: [],
        error: payload,
      };

    default:
      return state;
  }
};

export default randomDataReducer;
