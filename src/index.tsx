import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"

import App from "./App"
import {Providers} from "./providers/index"


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Providers>
        <App/>
      </Providers>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
)
