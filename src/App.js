import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import UserForm from "./Pages/UserForm/UserForm";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserForm />} />
      </Routes>
    </Router>
  );
}

export default App;
