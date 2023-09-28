import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./rootReducer";
import logger from "redux-logger";
import rootSaga from "./rootSaga";
import { TypedUseSelectorHook, useSelector } from "react-redux";
const configureAppStore = (initialState: {}) => {
  const reduxSagaMonitorOptions = {};
  const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);
  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
      const middlewares = getDefaultMiddleware({
        serializableCheck: false,
      }).concat(sagaMiddleware);
      if (process.env.NODE_ENV === "development") {
        middlewares.concat(logger);
      }
      return middlewares;
    },
  });
  sagaMiddleware.run(rootSaga);
  return store;
};
export const store = configureAppStore({});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

