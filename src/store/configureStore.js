import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import main from './reducers/main';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  main:main
})

const configureStore = () => {
  return createStore(rootReducer,compose(applyMiddleware(thunk)));
}

export default configureStore;