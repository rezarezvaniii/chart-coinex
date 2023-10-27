import React, { Component } from 'react';
import AppContainer from './Components/AppContainer';
import "./index.css"
import { Provider } from 'react-redux';
import store from './store';

export default function App() {
    return (
        <>
            <Provider store={store}>

                <AppContainer />
            
            </Provider>

        </>
    )
}