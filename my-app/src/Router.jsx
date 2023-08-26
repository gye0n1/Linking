import { Routes, Route, BrowserRouter } from "react-router-dom";
import Test from "../src/Test";
import Main from "../src/Main";
import Testresult from "../src/Testresult";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/test" element={<Test />} />
        <Route path="/Testresult" element={<Testresult />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
