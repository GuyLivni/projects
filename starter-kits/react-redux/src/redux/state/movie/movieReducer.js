import { movieTypes } from "./";
import { handle } from "../../middlewares/api";

const initialState = {
  movies: [],
  movieDetails: {},
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case movieTypes.GET_MOVIES:
      return handle(state, action, {
        start: () => {
          return Object.assign({}, state, {
            loading: true
          });
        },
        success: () => {
          return Object.assign({}, state, {
            loading: false,
            movies: action.payload.Search
          });
        },
        failure: () => {
          return Object.assign({}, state, {
            loading: false
          });
        }
      });

    case movieTypes.GET_MOVIE:
      return handle(state, action, {
        start: () => {
          return Object.assign({}, state, {
            loading: true
          });
        },
        success: () => {
          return Object.assign({}, state, {
            loading: false,
            movieDetails: action.payload
          });
        },
        failure: () => {
          return Object.assign({}, state, {
            loading: false
          });
        }
      });

    default:
      return state;
  }
}
