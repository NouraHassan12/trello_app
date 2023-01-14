import { CONSTANTS } from "../actions";

export const setActiveBoard = (id) => {
  return {
    type: CONSTANTS.SET_ACTIVE_BOARD,
    payload: id,
  };
};
