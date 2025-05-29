
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MovieSearch from "./pages/MovieSearch";
import Error from "./pages/Error";
import AppLayout from "./components/Layouts/AppLayout";
import Music from "./pages/Music";
import Movies from "./pages/Movies";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
           <Route path="/" element={<Home/>}></Route>
           <Route path="*" element={<Error/>}></Route>
           
           <Route element={<AppLayout/>}>
           <Route path="/search" element={<MovieSearch/>}></Route>
           <Route path="/music" element={<Music/>}></Route>
           <Route path="/movies" element={<Movies/>}></Route>
          
           </Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
