

function Footer() {
  return (
    <footer className="w-screen h-12 bg-yellow-500 bg-opacity-50 fixed bottom-0 px-8 flex justify-between items-center">
        <div className="flex items-center text-white">
            <img src="/hr-logo.png" alt="Hossain Razavi" height={50} width={50} />
            <p>طراحی و توسعه توسط <a className="text-blue-300" href="https://golosein.com">حسین رضوی</a></p>
        </div>
        <div className="text-blue-300" >
            <a href="https://github.com/h-razavi" target="_blank">GitHub</a> <span className="mx-4 text-white">|</span> <a href="https://www.linkedin.com/in/hossain-razavi" target="_blank">LinkedIn</a>
        </div>

    </footer>
  )
}

export default Footer