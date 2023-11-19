import { useState } from "react";
import { useTranslation } from "react-i18next";

function Footer() {
  const [FooterIsShown, setFooterIsShown] = useState(false);
  const { t } = useTranslation();
  const footerButtonClassName = `fixed bottom-0 left-8 text-2xl p-2 rounded-bl-full rounded-tr-full bg-yellow-500 text-white ${
    FooterIsShown ? "translate-y-0 " : "-translate-y-12 -rotate-180"
  }`;
  const footerClassName = `w-screen h-12 bg-yellow-500 bg-opacity-50 fixed -bottom-12 px-8 flex justify-between items-center ${
    FooterIsShown ? "translate-y-0 " : "-translate-y-12"
  }`;

  return (
    <>
      <button
        className={footerButtonClassName}
        onClick={() => setFooterIsShown(!FooterIsShown)}
      >
        &#9650;
      </button>
      <footer className={footerClassName}>
        <div className="flex items-center text-white">
          <img src="/hr-logo.png" alt="Hossain Razavi" height={50} width={50} />
          <p>
            {t("footerText")}
            <a className="text-blue-300" href="https://golosein.com">
              {" "}
              {t("myName")}
            </a>
          </p>
        </div>
        <div className="text-blue-300">
          <a href="https://github.com/h-razavi" target="_blank">
            GitHub
          </a>{" "}
          <span className="mx-4 text-white">|</span>{" "}
          <a href="https://www.linkedin.com/in/hossain-razavi" target="_blank">
            LinkedIn
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
