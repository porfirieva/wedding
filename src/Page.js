import { Routes, Route } from "react-router-dom";

import {
  Constructor,
  Main,
  About,
  Portfolio,
  Decor,
  Rent,
  Contacts,
  NotFound,
} from "./Pages";

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
