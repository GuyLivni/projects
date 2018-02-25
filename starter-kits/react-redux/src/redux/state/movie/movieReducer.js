import { movieTypes } from "./";
import { handle } from "../../middlewares/api";

const initialState = [];

export default function(state = initialState, action) {
  switch (action.type) {
    case movieTypes.GET_MOVIES:
      return handle(state, action, {
        success: () => {
          return action.payload;
        }
      });

    default:
      return state;
  }
}
