import "./App.css";
import Menu from "./Components/Menu/Menu";
import LanguageProvider from "./Helpers/LanguageContext";
import Main from "./Pages/Main";

function App() {
  return (
    <div>
      <LanguageProvider>
        <Menu />
        <Main />
      </LanguageProvider>
    </div>
  );
}

export default App;
