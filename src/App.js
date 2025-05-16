import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Courses } from "./pages/Courses";
import { Partners } from "./pages/Partners";
import { Registration } from "./pages/Registration";
import { About } from "./pages/About";
import { Welcome } from "./pages/Welcome";
import { Header } from "./components/Header";
import { PageNotFound } from "./pages/PageNotFound";
import { Libary } from "./pages/Libary";
import { ProtectedRoute } from "./routes.js/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/about" element={<About />} />

        <Route
          path="/welcome"
          element={
            <ProtectedRoute>
              <Welcome />
            </ProtectedRoute>
          }
        />
        <Route
          path="/libary"
          element={
            <ProtectedRoute>
              <Libary />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
