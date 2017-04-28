import { combineReducers } from 'redux';
import MoviesReducer from './MovieReducer';
import SelectedMovieReducer from './SelectedMovieReducer';

const rootReducer = combineReducers({
    movies: MoviesReducer,
    selectedMovies: SelectedMovieReducer,
});

export default rootReducer;