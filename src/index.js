import React from "react";
import ReactDOM from "react-dom/client";
// import "./style.css"
import "./movie.css"
import App from "./App";
import { BrowserRouter } from "react-router-dom";
// import { AppContenxt } from "./YouTubeClone/context/context";
import { Provider } from "react-redux";
import { store } from "./Movie_web_app/store/store";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
      <BrowserRouter> 
      <Provider store={store}>
                  <App /> 
                  </Provider>
      </BrowserRouter>
)
