import GithubIcon from "../../assets/GithubIcon.svg";

const Footer = () => {
  return (
    <footer className="relative py-2 bg-[#1F2937] text-white border-t border-white border-solid">
      <div className="container flex items-center justify-center mx-auto px-2">
        <a
          href="https://github.com/ShubhamKadam098"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 text-sm"
        >
          <img width="40" height="40" src={GithubIcon} alt="github" />
          @ShubhamKadam098
        </a>
      </div>
    </footer>
  );
};

export default Footer;
