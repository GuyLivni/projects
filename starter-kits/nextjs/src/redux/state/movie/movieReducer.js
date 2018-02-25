import { fromJS } from 'immutable';
import { handle } from '../../middlewares/api';
import { movieTypes } from './';

const initialState = fromJS({
  movies: [],
  movie: {},
});

export default function(state = initialState, action) {
  switch (action.type) {
    case movieTypes.GET_MOVIES:
      return handle(state, action, {
        success: () => state.set('movies', fromJS(action.payload)),
      });

    case movieTypes.GET_MOVIE:
      return handle(state, action, {
        success: () => state.set('movie', fromJS(action.payload)),
      });

    default:
      return state;
  }
}
