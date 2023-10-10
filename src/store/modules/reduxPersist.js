import storage from 'redux-persist/lib/storage';
//Vai salvar as coisas no local storage do meu navegador.
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistedReducers = persistReducer(
    {
      key: 'CONSUMO-API',
      storage,
      whitelist: ['auth'],
    },
    reducers,
  );

  return persistedReducers;
};
