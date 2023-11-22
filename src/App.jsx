import "./App.css";
import Starter from "./tutorial/02-useEffect/starter/05-cleanup-function";
import Final from "./tutorial/01-useState/final/03-useState-array";

import Navbar from "./tutorial/04-project-structure/starter/Navbar";
import {
  Home,
  About,
} from "./tutorial/04-project-structure/starter/Pages";

function App() {
  return (
    <div className="contianer">
      <Home />
      <About />
    </div>
  );
}

export default App;
