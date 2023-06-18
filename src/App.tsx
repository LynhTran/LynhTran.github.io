import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./routes/Home";
import NoMatch from "./routes/NoMatch";
import Post from "./routes/Post";

function App() {
  return (
    <div className="grid grid-rows-layout min-h-screen-d min-h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<Post />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
