import Header from "./components/Header";
import Pages from "./pages/Pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Router>
        <ToastContainer />
        <Header />
        <Pages />
      </Router>
    </>
  );
}

export default App;
