import { useState, useEffect } from "react";
//
import { useLocation } from "react-router-dom";
//
import { OptionType } from "../utils/types";
//
import refreshIcon from "../components/icons/refresh.svg";
import deleteIcom from "../components/icons/delete.svg";

type Props = {
  onNext: () => void;
};

const newInput = { text: "", points: 0 };

function OptionsForm({ onNext }: Props) {
  //Initiating Data and State
  const location = useLocation();
  const sharedData = new URLSearchParams(location.search).get("data");
  const initialData = sharedData ? JSON.parse(sharedData) : [newInput];
  const [inputs, setInputs] = useState<OptionType[]>(initialData);

  useEffect(() => {
    localStorage.setItem("inputs", JSON.stringify(inputs));
  }, [inputs]);

  //Handling and Event Fucntions
  function handleTitleChange(event: React.ChangeEvent<HTMLInputElement>) {
    localStorage.setItem("title", event.target.value);
  }

  function handleAddInput(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    setInputs([...inputs, newInput]);
  }

  function handleKeyPress(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      event.preventDefault();
      setInputs([...inputs, newInput]);
    }
  }

  function handleInputChange(
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const newInputs = [...inputs];
    newInputs[index] = { ...newInputs[index], text: event.target.value };
    setInputs(newInputs);
  }

  function handleRemoveInput(index: number) {
    const newInputs = [...inputs];
    newInputs.splice(index, 1);
    setInputs(newInputs);
  }

  function handleReset(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    setInputs([newInput]);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (inputs.length < 2) {
      alert("لطفا حداقل دو گزینه را وارد کنید");
      return;
    } else {
      onNext();
    }
  }

  return (
    <form
      className="flex flex-col gap-5 items-center pt-8 text-black"
      onSubmit={handleSubmit}
    >
      <h2 className="text-xl text-center text-white">
        گزینه‌های خودتون رو اضافه کنید
      </h2>
      <input
        className="w-1/3 px-3 h-10 rounded-md bg-slate-500 bg-opacity-50 text-white"
        type="text"
        placeholder="عنوان لیست خود را اینجا بنویسید (اختیاری)"
        onChange={handleTitleChange}
        defaultValue={localStorage.getItem("title") || ""}
      />
      {inputs.map((input, index) => (
        <div className="flex items-center w-1/3" key={index}>
          <input
            type="text"
            key={index}
            value={input.text}
            onChange={(event) => handleInputChange(index, event)}
            onKeyDown={handleKeyPress}
            autoFocus={index === inputs.length - 1}
            placeholder="متن گزینه خود را اینجا بنویسید"
            className="w-full px-3 h-10 rounded-md"
            max={100}
          />
          <button
            className="bg-slate-500 bg-opacity-50 h-10 w-10 rounded-md mr-2 hover:bg-red-500 hover:bg-opacity-40"
            onClick={handleRemoveInput.bind(null, index)}
          >
            <img src={deleteIcom} alt="delete" className="h-6 mx-auto" />
          </button>
        </div>
      ))}
      <button
        className="bg-sky-500 bg-opacity-80 w-1/3 h-10 rounded-md text-2xl hover:bg-opacity-100"
        onClick={handleAddInput}
      >
        +
      </button>
      <button
        className="bg-green-500 bg-opacity-80 w-1/3 h-10 rounded-md hover:bg-opacity-100"
        onClick={handleReset}
      >
        <img src={refreshIcon} alt="refresh" className="h-6 mx-auto" />
      </button>
      <button className="bg-purple-500 bg-opacity-80 w-1/3 h-10 rounded-md text-lg text-white hover:bg-opacity-100">
        بریم برای رده‌بندی
      </button>
    </form>
  );
}

export default OptionsForm;
