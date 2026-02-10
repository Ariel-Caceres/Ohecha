

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { MovieDetails } from "./components/MovieDetails.tsx";
import Home from "./pages/Home.tsx";

function App() {
  return (
    <div className={`w-full min-h-screen box-border bg-black `}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/movie/:id" element={<MovieDetails />}></Route>
        </Routes>
      </Router>
    </div >
  );
}

export default App;
