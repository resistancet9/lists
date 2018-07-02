import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Combined from "./redux/reducers";

const store = createStore(
  Combined,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const App = () => {
  return (
    <Provider store={store}>
      <div className="main-container">
        <div className="wrapper">
          <Form />
          <List />
        </div>
      </div>
    </Provider>
  );
};

export default App;
