import 'react-native-gesture-handler';
import React, { useState } from 'react';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { enableScreens } from 'react-native-screens';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import MainNavigator from './navigation/MainNavigator';
import MealsReducer from './store/reducers/meals';
import modalReducer from './store/reducers/modal';

const rootReducer = combineReducers({
  meals: MealsReducer,
  modal: modalReducer,
});

const store = createStore(rootReducer);

const fetchFont = () => {
  enableScreens();

  return Font.loadAsync({
    openSansRegular: require('./assets/Fonts/OpenSans-Regular.ttf'),
    openSansBold: require('./assets/Fonts/OpenSans-Bold.ttf'),
  });
};

const App = () => {
  const [loadData, setLoadData] = useState(false);

  if (!loadData) {
    return (
      <AppLoading startAsync={fetchFont} onFinish={() => setLoadData(true)} onError={console.log('errorfetchFont')} />
    );
  }
  return (
    <Provider store={store}>
      <MainNavigator></MainNavigator>
    </Provider>
  );
};

export default App;
