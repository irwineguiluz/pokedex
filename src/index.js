import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/main.scss';
import Main from './routes';

import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { Provider } from 'react-redux';

import { BrowserRouter } from 'react-router-dom';

import rootReducer from './configStore/rootReducer';
import { rootEpic } from './epics';


const epicMiddleware = createEpicMiddleware();

const store = createStore(rootReducer, applyMiddleware(epicMiddleware));

epicMiddleware.run(rootEpic);

const appWithProvider = (
    <Provider store={store}>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </Provider>
);

ReactDOM.render(appWithProvider, document.getElementById('root'));
