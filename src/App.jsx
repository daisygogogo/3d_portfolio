import { BrowserRouter } from "react-router-dom";
import {
  About2,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-primary">
        <Navbar />
        <div className="relative z-0">

          <About2 />
          <StarsCanvas />
        </div>


        <Experience />
        <Tech />
        <Works />
        {/* <Feedbacks /> */}
        <div className="relative z-0 bgblack/25">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter >
  );
};

export default App;
