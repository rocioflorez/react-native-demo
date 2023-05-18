import { Provider } from 'react-redux';
import store from './redux/store/index';

import MainNavigation from './navigation/Navigation';

export default function App() {
  return (
    <Provider store={store}>
      <MainNavigation />
    </Provider>
  );
}

