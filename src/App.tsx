

import React from 'react';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import ApplicationNavigator from './navigation/Application';
import { persistor, store } from './store';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ThemeProvider } from './theme';
import { PaperProvider } from 'react-native-paper';


function App(): React.JSX.Element {

  return (
    <GestureHandlerRootView>
      <Provider store={store}>
          <PersistGate persistor={persistor}>
            <PaperProvider theme={{dark: false}}>
              <ThemeProvider>
                <ApplicationNavigator />
              </ThemeProvider>
            </PaperProvider>
        </PersistGate>
      </Provider>
    </GestureHandlerRootView>
  );
}


export default App;
