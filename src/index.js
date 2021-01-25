import React from "react";
import ReactDOM from "react-dom";
import { MatomoProvider, createInstance } from "@datapunt/matomo-tracker-react";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const instance = createInstance({
  urlBase: "https://analytics.10bshop.com",
  siteId: 1,
});

ReactDOM.render(
  <React.StrictMode>
    <MatomoProvider value={instance}>
      <App />
    </MatomoProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
