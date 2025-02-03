import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { store } from './store/store';
import { Router } from './providers/Router';

export const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Router />
      </Provider>
    </BrowserRouter>
  );
};
