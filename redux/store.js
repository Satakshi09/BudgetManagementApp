// import {configureStore} from '@reduxjs/toolkit';
// import rootReducer from './rootReducer';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import {persistReducer, persistStore} from 'redux-persist';

// const store = configureStore({
//   reducer: rootReducer,
// });
// export default store;

import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
export default () => {
  let store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });
  let persistor = persistStore(store);

  return {store, persistor};
};
