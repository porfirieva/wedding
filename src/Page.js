import { Routes, Route } from "react-router-dom";
import Constructor from "./Pages/Constructor";
import NotFound from "./Pages/NotFound";
import Main from "./Pages/Main";
import About from "./Pages/About";
import Gallery from "./Pages/Gallery";
import Contacts from "./Pages/Contacts";

const Page = () => {
  return (
    <Routes>
      <Route path="/" Component={Main}></Route>
      <Route path="/constructor" Component={Constructor}></Route>
      <Route path="/about" Component={About}></Route>
      <Route path="/gallery" Component={Gallery}></Route>
      <Route path="/contacts" Component={Contacts}></Route>
      <Route path="*" element={NotFound} />
    </Routes>
  );
};

export default Page;
