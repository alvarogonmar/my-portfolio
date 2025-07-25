import "./App.css";
import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <header style={{ paddingTop: "80px" }}>
              <h1 className={styles.title}>Home</h1>
            </header>
          }
        />
        <Route
          path="/about"
          element={
            <header style={{ paddingTop: "80px" }}>
              <h1 className={styles.title}>About</h1>
            </header>
          }
        />
        <Route
          path="/projects"
          element={
            <header style={{ paddingTop: "80px" }}>
              <h1 className={styles.title}>Projects</h1>
            </header>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
