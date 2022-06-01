import React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { CookiesProvider, useCookies } from "react-cookie";
import App from "./App";

ReactDOM.render(
	<CookiesProvider>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</CookiesProvider>,
	document.getElementById("root")
);
