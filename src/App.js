import "./App.css";
import TodoWrapper from "./components/TodoWrapper";
import NavigationBar from "./components/Navbar";
import Alert from "./components/Alert";
import { useState } from "react";

const App = () => {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  return (
    <>
      <NavigationBar />
      <Alert alert={alert} />
      <TodoWrapper showAlert={showAlert} />
    </>
  );
};

export default App;