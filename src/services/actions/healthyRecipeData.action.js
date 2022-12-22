import { API } from "../api/api";
import {
  LOAD_HEALTHY_INITIATED,
  LOAD_HEALTHY_SUCCESS,
  LOAD_HEALTHY_ERROR,
} from "../types/types";

export const fetchHealthyRecipeData = (options) => {
  return function (dispatch, getState) {
    dispatch(healthyRecipeLoadAction());
    API.get("recipes/findByNutrients", { params: options })
      .then((res) => {
        dispatch(healthyRecipeSuccessAction(res.data));
      })
      .catch((err) => {
        dispatch(healthyRecipeErrorAction(err));
      });
  };
};

export const healthyRecipeLoadAction = () => {
  return {
    type: LOAD_HEALTHY_INITIATED,
  };
};

export const healthyRecipeSuccessAction = (payload) => {
  return {
    type: LOAD_HEALTHY_SUCCESS,
    payload: payload,
  };
};

export const healthyRecipeErrorAction = (payload) => {
  return {
    type: LOAD_HEALTHY_ERROR,
    payload: payload,
  };
};
