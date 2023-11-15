
type Props = {
    text : string,
    closeError? : () => void
}

function Alert({text, closeError} : Props) {
  return (
<>
  <div className="text-white px-6 py-4 flex items-center justify-center border-0 rounded relative bg-pink-700 w-1/2 mx-auto mt-2">
    <span className="text-xl inline-block mr-5 align-middle">
    </span>
    <span className="inline-block align-middle mr-8">
    &#128276; {text}
    </span>
    <button className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none" onClick={closeError}>
      <span>×</span>
    </button>
  </div>
</>
  )
}

export default Alert