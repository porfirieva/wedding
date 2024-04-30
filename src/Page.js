import { Routes, Route } from "react-router-dom";
import Constructor from "./Pages/Constructor";
import NotFound from "./Pages/NotFound";
import Main from "./Pages/Main";
import About from "./Pages/About";
import Contacts from "./Pages/Contacts";
import Decor from "./Pages/Decor";
import Portfolio from "./Pages/Portfolio";
import Rent from "./Pages/Rent";

const Page = () => {
  return (
    <Routes>
      <Route path="/" Component={Main}></Route>
      <Route path="/about" Component={About}></Route>
      <Route path="/portfolio" Component={Portfolio}></Route>
      <Route path="/constructor" Component={Constructor}></Route>
      <Route path="/decor" Component={Decor}></Route>
      <Route path="/rent" Component={Rent}></Route>
      <Route path="/contacts" Component={Contacts}></Route>
      <Route path="*" element={NotFound} />
    </Routes>
  );
};

export default Page;
