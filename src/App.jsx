import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import useDarkMode from "use-dark-mode";
import AppContext from "./AppContext";
import MainApp from "./MainApp";
import GlobalStyles from "./theme/GlobalStyles";
import { lightTheme, darkTheme } from "./theme/themes";
import Chatbot from "./components/Chatbot"; // Import Chatbot

function App() {
  window.matchMedia = null;
  const darkMode = useDarkMode(true);

  return (
    <AppContext.Provider value={{ darkMode }}>
      <ThemeProvider theme={darkMode.value ? darkTheme : lightTheme}>
        <GlobalStyles />
        <div className="App">
          <BrowserRouter>
            <MainApp />
            <Chatbot /> {/* Add chatbot here */}
          </BrowserRouter>
        </div>
      </ThemeProvider>
    </AppContext.Provider>
  );
}

export default App;
