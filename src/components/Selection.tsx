import { useState, useEffect } from "react";
//
import { OptionType } from "../utils/types";

type Props = {
  onNext: () => void;
};

function Selection({ onNext }: Props) {
  const [options, setOptions] = useState<OptionType[]>([]);
  const [pairs, setPairs] = useState<OptionType[][]>([]);
  const [selectedPairIndex, setSelectedPairIndex] = useState(0);

  //Get title from local storage
  const listTitle = localStorage.getItem("title") || "";

  useEffect(() => {
    //Get data from local storage
    const inputs = JSON.parse(
      localStorage.getItem("inputs") || "[]"
    ) as OptionType[];
    setOptions(inputs);

    //Generate pairs
    function generatePairs() {
      const pairs: OptionType[][] = [];
      const optionsCopy: OptionType[] = [...inputs];

      // Randomize the order of the options
      for (let i = optionsCopy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [optionsCopy[i], optionsCopy[j]] = [optionsCopy[j], optionsCopy[i]];
      }

      // Generate all possible pairs
      for (let i = 0; i < optionsCopy.length; i++) {
        for (let j = i + 1; j < optionsCopy.length; j++) {
          pairs.push([optionsCopy[i], optionsCopy[j]]);
        }
      }
      return pairs;
    }
    setPairs(generatePairs());
  }, []);


  function handleOptionSelection(option: OptionType) {
    const newOptions = options.map((opt) =>
      opt.text === option.text ? { ...opt, points: opt.points + 1 } : opt
    );
    setOptions(newOptions);
    setSelectedPairIndex((prevIndex) => prevIndex + 1);
    if (selectedPairIndex === pairs.length - 1) {
      localStorage.setItem("inputs", JSON.stringify(newOptions));
      onNext();
    }
  }

  return (
    <div className="bg-sky-950 h-full lg:w-1/2 mx-auto p-12 bg-opacity-80 rounded-3xl border-2 border-white shadow-xl">
      {listTitle && (
        <h2 className="text-center text-4xl mt-8 w-fit mx-auto p-4 rounded-md leading-0 bg-amber-400 bg-opacity-40">
          {listTitle}
        </h2>
      )}
      <h2 className="text-center text-2xl mt-8">
        از بین دو گزینه زیر کدوم رو انتخاب می‌کنید؟
      </h2>
      <div className=" h-fit mx-auto mt-8 flex flex-col items-center md:flex-row gap-6 rounded-3xl">
        <div className="md:w-1/2 flex justify-center place-items-center p-12 bg-slate-800 border-white rounded-xl hover:bg-green-500 hover:bg-opacity-60">
          <button
            onClick={() => handleOptionSelection(pairs[selectedPairIndex][0])}
            className="bg-sky-400 bg-opacity-50 w-36 h-36 overflow-hidden text-ellipsis break-all  flex items-center justify-center break-all text-center text-xl rounded-xl overflow-clip hover:bg-slate-500"
          >
            {pairs[selectedPairIndex] && pairs[selectedPairIndex][0]?.text}
          </button>
        </div>
        <div className="md:w-1/2 flex justify-center place-items-center p-12 bg-slate-800 border-white rounded-xl hover:bg-green-500 hover:bg-opacity-60">
          <button
            onClick={() => handleOptionSelection(pairs[selectedPairIndex][1])}
            className="bg-sky-400 bg-opacity-50 w-36 h-36 overflow-hidden text-ellipsis  flex items-center justify-center text-center text-xl rounded-xl overflow-clip hover:bg-slate-500"
          >
            {pairs[selectedPairIndex] && pairs[selectedPairIndex][1]?.text}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Selection;
