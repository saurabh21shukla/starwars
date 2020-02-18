
import {createStore, applyMiddleware} from 'redux';
import {routerMiddleware} from 'react-router-redux';
import thunk from 'redux-thunk';
import {reduxSagaMiddleware, initSagas} from './sagas';
import rootReducer from './reducers';

function configureStore(initialState = {}) {
    const reduxThunkMiddleware = thunk;
    const reduxRouterMiddleware = routerMiddleware();
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const middleware = composeEnhancers(
        applyMiddleware(reduxSagaMiddleware, reduxThunkMiddleware, reduxRouterMiddleware),
    )
    const store = createStore(rootReducer, initialState, middleware);
    initSagas();

    return store;
}
export default configureStore();