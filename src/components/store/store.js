
import { compose , legacy_createStore as createStore, applyMiddleware } from "redux"

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import logger from "redux-logger";
import { rootReducer } from "./root-reducer"

//import thunk from "redux-thunk";

import  createSagaMiddleware from 'redux-saga'
import  {rootSaga} from './root-saga'


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart'],
    blacklist: ['user']
}

const sagaMiddleware = createSagaMiddleware()

const persistedReducer = persistReducer(persistConfig, rootReducer)

const middleWares = [process.env.NODE_ENV !== 'production' && logger, sagaMiddleware, ].filter(Boolean)

const composeEnhancer = (process.env.NODE_ENV !== 'production' && 
        window &&
        window.__REDUXDEVTOOLS_EXTENSION_COMPOSE__) || compose

const composeEnhancers = composeEnhancer(applyMiddleware(...middleWares))

export const store = createStore(persistedReducer, undefined, composeEnhancers);

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store)

