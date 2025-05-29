import AppLayout from "./components/Layouts/AppLayout";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MovieSearch from "./pages/MovieSearch";
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
              <Route path="/" element={< Home/>} />,
              <Route path="/MovieSearch" element={<MovieSearch/>} />,
              <Route path="*" element={<Error />}></Route>,
            ]}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
