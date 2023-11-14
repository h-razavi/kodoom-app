import { useState } from "react";

import { Navigate } from "react-router-dom";

import OptionsForm from "./components/OptionsForm";
import Selection from "./components/Selection";
import Navbar from "./components/Navbar";

function App() {
  const [currentComponentIndex, setCurrentComponentIndex] = useState(0);

  const componentFlow = [
    {
      component: <OptionsForm onNext={handleComponentChange} />,
      id: "c1",
    },
    {
      component: <Selection onNext={handleComponentChange} />,
      id: "c2",
    },
    {
      component: <Navigate to="/results" />,
      id: "c3",
    },
  ];

  function handleComponentChange() {
    setCurrentComponentIndex((prevComponentIndex) => {
      if (prevComponentIndex < componentFlow.length) {
        return prevComponentIndex + 1;
      } else {
        localStorage.removeItem("inputs");
        return 0;
      }
    });
  }

  return (
    <>
    <Navbar />
      <main className="text-white px-16 py-12">
        {componentFlow[currentComponentIndex].component}
      </main>
    </>
  );
}

export default App;
