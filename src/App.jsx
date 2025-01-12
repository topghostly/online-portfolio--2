import "./App.css";
import GrainAnimation from "./components/GrainAnimation";
import Loader from "./components/Loader";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <GrainAnimation />
      <Loader />
      <Home />
    </>
  );
}

export default App;
