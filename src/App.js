import { useState } from "react";
import "./App.css";
import { Login, Register } from "./components/Login";
import { Header } from "./components/Header";
import { AddPet, ListPet } from "./components/Pet";

function App() {
  const token = localStorage.getItem("token");
  const [toggleLogin, setToggleLogin] = useState(true);
  const [isLogged, setIsLogged] = useState(!!token);
  const [isListLayout, setIsListLayout] = useState(true);
  const logout = () => {
    localStorage.removeItem("token");
    setIsLogged(false);
  };
  return isLogged ? (
    <div>
      <Header
        logout={logout}
        isListLayout={(isList) => setIsListLayout(isList)}
      />
      {isListLayout ? (
        <ListPet />
      ) : (
        <AddPet isListLayout={() => setIsListLayout(true)} />
      )}
    </div>
  ) : (
    <div className="App">
      {toggleLogin ? (
        <Login
          toggleLogin={() => setToggleLogin(!toggleLogin)}
          isLogged={() => setIsLogged(true)}
        />
      ) : (
        <Register
          toggleLogin={() => setToggleLogin(!toggleLogin)}
          isLogged={() => setIsLogged(true)}
        />
      )}
    </div>
  );
}

export default App;
