import { MdMobileFriendly } from "react-icons/md";
import { BiMailSend } from "react-icons/bi";
import Image from "next/image";
const TopNav = ({ headers }) => {
  // console.log("logo: ", logo);
  return (
    <>
      <nav className="navbar sticky-top bg-white border-b">
        <div className="container max-w-screen-xl">
          <a className="navbar-brand flex items-center" href="#">
            <MdMobileFriendly className="text-orange-600" />
            <span className="block ml-3 text-base">{headers.mobile}</span>
          </a>
          <a className="navbar-brand flex items-center" href="#">
            <BiMailSend className="text-orange-600" />
            <span className="block ml-3 text-base">{headers.email}</span>
          </a>
        </div>
      </nav>
      <nav className="navbar navbar-expand-lg bg-orange-50">
        <div className="container max-w-screen-xl">
          <a
            className="navbar-brand block w-[120px] h-[30px] relative"
            href="#"
          >
            <Image
              src={`http:${headers?.logo?.fields?.file?.url}`}
              alt="logo"
              width="100%"
              height="100%"
              layout="fill"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default TopNav;
