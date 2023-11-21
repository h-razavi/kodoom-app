import { useState } from "react";
import { OptionType } from "../utils/types";
import Navbar from "./Navbar";
import Alert from "./Alert";
import Footer from "./Footer";
import { useTranslation } from "react-i18next";

function Results() {
  const [alert , setAlert] = useState<string>("")

  const {t,i18n: {language}} = useTranslation();
  //Load title and data from local storage and sort
  const reusltsData: OptionType[] = JSON.parse(
    localStorage.getItem("inputs") || "[]"
  );
  reusltsData.sort((a, b) => b.points - a.points);
  const listTitle = localStorage.getItem("title") || "";
  
  //Prepare data for sharing
  const listToShare = reusltsData.map((item) => ({ ...item, points: 0 }));
  const shareableResults = encodeURIComponent(JSON.stringify(reusltsData));
  const shareableList = encodeURIComponent(JSON.stringify(listToShare));

  //Copy to clipboard for sharing
  function copyToClipboard(type: string) {
    const shareResultsLink = `${
      window.location.origin + window.location.pathname
    }/?data=${shareableResults}`;
    const shareListLink = `${window.location.origin}/?data=${shareableList}`;
    if (type === "results") {
      navigator.clipboard.writeText(shareResultsLink).then(() => {
        setAlert(t("resultsSharedAlert"));
      });
    }
    if (type === "list") {
      navigator.clipboard.writeText(shareListLink).then(() => {
        setAlert(t("sharePollAlert"));
      });
    }
    setTimeout(() => {
      setAlert("")
    }, 3000)
  }

  //Reset list and return to home
  function resetList() {
    localStorage.removeItem("inputs");
    window.location.replace("/");
  }

  return (
    <div dir={language === "fa" ? "rtl" : "ltr"}>
    <Navbar />
    <section className="border-2 border-white text-white my-8 mx-auto rounded-3xl shadow-xl bg-sky-950 bg-opacity-80 md:w-1/2">
      {alert?<Alert text={alert} closeError={()=>setAlert("")} /> : ""}
      {listTitle && (
        <h2 className="text-center text-4xl mt-8 w-fit mx-auto p-4 rounded-md bg-amber-400 bg-opacity-40 text-white">
          {listTitle}
        </h2>
      )}
      <h2 className="text-center text-3xl font-extrabold mt-4">
        {t("resultsPageTitle")}
      </h2>
      <ol className="list-decimal p-8 mx-auto w-fit text-xl">
        {reusltsData.map((result) => (
          <li className="my-4 bg-slate-700 px-4 py-2 rounded-lg">
            <p className="text-center break-all">{result.text}</p>
          </li>
        ))}
      </ol>
      <div className="flex flex-col justify-center gap-4">
        <button
          className="text-slate-400  h-10 rounded-md text-lg underline hover:bg-opacity-100"
          onClick={() => copyToClipboard("results")}
        >
          {t("shareResults")}
        </button>
        <button
          className="text-slate-400 h-10 rounded-md text-lg underline hover:bg-opacity-100"
          onClick={() => copyToClipboard("list")}
        >
          {t("sharePoll")}
        </button>
        <button
          className="bg-green-500 rounded-md text-lg text-white w-fit p-4 mx-auto mb-6"
          onClick={resetList}
        >
          {t("restartFormButton")}
        </button>
      </div>
    </section>
    <Footer />
    </div>
  );
}

export default Results;
