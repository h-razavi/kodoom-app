import { OptionType } from "../utils/types";

function Results() {
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
        alert("اطلاعات با موفقیت کپی شد");
      });
    }
    if (type === "list") {
      navigator.clipboard.writeText(shareListLink).then(() => {
        alert("لیست با موفقیت کپی شد");
      });
    }
  }

  //Reset list and return to home
  function resetList() {
    localStorage.clear();
    window.location.replace("/");
  }

  return (
    <section className="border-2 border-white text-white mt-8 mx-auto rounded-lg w-3/4">
      {listTitle && (
        <h2 className="text-center text-4xl mt-8 w-fit mx-auto p-4 rounded-md bg-purple-400 text-black">
          {listTitle}
        </h2>
      )}
      <h2 className="text-center text-3xl font-extrabold mt-4">
        نتایج رده‌بندی
      </h2>
      <ol className="list-decimal p-8 mx-auto w-fit text-xl">
        {reusltsData.map((result) => (
          <li className="my-4 bg-slate-700 px-4 py-2 rounded-lg">
            <p className="text-center">{result.text}</p>
          </li>
        ))}
      </ol>
      <div className="flex flex-col justify-center">
        <button
          className="text-slate-600  h-10 rounded-md text-lg underline hover:bg-opacity-100"
          onClick={() => copyToClipboard("results")}
        >
          اشتراک نتایج
        </button>
        <button
          className="text-slate-600 h-10 rounded-md text-lg underline hover:bg-opacity-100"
          onClick={() => copyToClipboard("list")}
        >
          اشتراک نظرسنجی
        </button>
        <button
          className="bg-green-500 rounded-md text-lg text-white w-fit p-4 mx-auto mb-6"
          onClick={resetList}
        >
          از اول
        </button>
      </div>
    </section>
  );
}

export default Results;
