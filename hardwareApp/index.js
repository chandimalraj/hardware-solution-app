/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import {store} from './android/app/src/redux/store';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const ReduxApp = () => (
  <GestureHandlerRootView style={{flex: 1}}>
    <Provider store={store}>
      <App />
    </Provider>
  </GestureHandlerRootView>
);
AppRegistry.registerComponent(appName, () => ReduxApp);
