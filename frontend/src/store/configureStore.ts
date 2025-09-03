/**
 * Create the store with dynamic reducers
 */

import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { createInjectorsEnhancer, forceReducerReload } from 'redux-injectors';
import createSagaMiddleware from 'redux-saga';
import { createReducer } from './reducers';
import rootSaga from './redux-store/saga/rootSaga';

// import { TaskService } from 'app/services/TaskServices/task-service';

// import { loadUser } from 'redux-oidc';
// import { userManager } from '../oidc/userManager';

export function configureAppStore() {
//   const taskService = TaskService.createInstance();

  const reduxSagaMonitorOptions = {
    // context: {
    //   taskService,
    // },
  };
  const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);
  const { run: runSaga } = sagaMiddleware;

  // Create the store with saga middleware
  const middlewares = [sagaMiddleware];
  const enhancers = [
    createInjectorsEnhancer({
      createReducer,
      runSaga,
    }),
  ];

  const store = configureStore({
    reducer: createReducer(),
    middleware: [
      ...getDefaultMiddleware({
        serializableCheck: false,
        // context: {
        //   taskService,
        // },
      }),
      ...middlewares,
    ],
    devTools: process.env.NODE_ENV !== 'production',
    enhancers,
  });

  sagaMiddleware.run(rootSaga);

  // Make reducers hot reloadable, see http://mxs.is/googmo
  /* istanbul ignore next */
  if (module) {
    module.hot.accept('./reducers', () => {
      forceReducerReload(store);
    });
  }

  return { store };
}
