import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { Router } from './providers/Router';
import { store } from './store/store';

export const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Router />
      </Provider>
    </BrowserRouter>
  );
};
