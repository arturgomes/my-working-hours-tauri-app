import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { ThemeProvider } from "./contexts/ThemeContext";
import { store } from "./store";
import './i18n/index'
import './index.css'

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<Provider store={store}>
			<ThemeProvider>
				<App />
			</ThemeProvider>
		</Provider>
	</React.StrictMode>,
);
