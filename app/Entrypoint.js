/**
 * React Native App
 * Everthing starts from the entrypoint
 */
import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import Navigator from 'app/navigation';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import configureStore from 'app/store/configureStore';
const { persistor, store } = configureStore();
import AppStyles from 'app/config/styles';

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: AppStyles.color.COLOR_WHITE
    }
};

export default class Entrypoint extends Component {
     state = {
        signedIn: false,
        checkedSignIn: false
    };
    render() {
        return (
            <Provider store={store}>
                <PersistGate
                    loading={<ActivityIndicator />}
                    persistor={persistor}
                >
                    <PaperProvider theme={theme}>
                        <Navigator />
                    </PaperProvider>
                </PersistGate>
            </Provider>
        );
    }
}
