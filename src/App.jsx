import AppLayout from "./components/Layouts/AppLayout";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Error from "./pages/Error";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<AppLayout />}
            children={[
              <Route path="/" element={<Landing />} />,
              <Route path="/home" element={<Home />} />,
              <Route path="*" element={<Error />}></Route>,
            ]}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
