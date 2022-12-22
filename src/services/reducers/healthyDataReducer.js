import {
  LOAD_HEALTHY_INITIATED,
  LOAD_HEALTHY_SUCCESS,
  LOAD_HEALTHY_ERROR,
} from "../types/types";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const healthyRecipeDataReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_HEALTHY_INITIATED:
      return {
        ...state,
        loading: true,
      };

    case LOAD_HEALTHY_SUCCESS:
      return {
        loading: false,
        data: payload,
        error: "",
      };

    case LOAD_HEALTHY_ERROR:
      return {
        loading: false,
        data: [],
        error: payload,
      };

    default:
      return state;
  }
};

export default healthyRecipeDataReducer;
