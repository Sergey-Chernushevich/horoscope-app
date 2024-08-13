import { useEffect } from "react";

import "./App.css";
import HoroscopeWrapper from "./components/HoroscopeWrapper/HoroscopeWrapper";

const telegram = window.Telegram.WebApp;

function App() {
  useEffect(() => {
    telegram.ready();
  });
  return (
    <div className="App">
      <HoroscopeWrapper />
    </div>
  );
}

export default App;
