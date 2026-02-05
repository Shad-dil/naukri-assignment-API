import { ToastContainer } from "react-toastify";
import "./App.css";

import UsersPage from "./_components/UserPage";

function App() {
  return (
    <>
      <UsersPage />
      <ToastContainer />
    </>
  );
}

export default App;
