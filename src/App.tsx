

import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import ApplicationNavigator from './navigation/Application';
import { persistor, store } from './store';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


function App(): React.JSX.Element {

  return (
    <GestureHandlerRootView>
      <Provider store={store}>
          <PersistGate persistor={persistor}>
            <SafeAreaView style={{flex: 1}}>
              <ApplicationNavigator />
            </SafeAreaView>
        </PersistGate>
      </Provider>
    </GestureHandlerRootView>
  );
}


export default App;
