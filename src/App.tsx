import { useState , useEffect } from "react";

import { Navigate } from "react-router-dom";

import OptionsForm from "./components/OptionsForm";
import Selection from "./components/Selection";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import {useTranslation} from "react-i18next"

function App() {
  const [currentComponentIndex, setCurrentComponentIndex] = useState(0);

  const {i18n: {language , changeLanguage}} = useTranslation();

  useEffect(() => {
    const defaultLanguage = localStorage.getItem("language") || "fa";
    changeLanguage(defaultLanguage);    
  })


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
    <div dir={language === "fa" ? "rtl" : "ltr"}>
    <Navbar />
      <main className="text-white md:px-16 px-8 py-12">
        {componentFlow[currentComponentIndex].component}
      </main>
      <Footer />
    </div>
  );
}

export default App;
