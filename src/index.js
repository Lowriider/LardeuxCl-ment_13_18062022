import "./css/main.css";
import React from 'react';
import ReactDOM from 'react-dom';
import Router from "./routage/Router";
import {Provider} from "react-redux";
import {store} from "./js/Utils/store";

ReactDOM.render(
    <Provider store={store}>
        <Router/>
    </Provider>,
    document.getElementById('root')
);
