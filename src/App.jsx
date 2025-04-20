import "./App.css";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router";
import Layout from "./Components/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
