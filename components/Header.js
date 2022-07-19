import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Fragment } from "react";
import Image from "next/image";
const Header = ({ headers, links }) => {
  console.log("headers: ", headers);
  return (
    <div className="max-w-screen-xl mx-auto px-6 mt-24">
      <div className="flex flex-wrap items-center -mx-6">
        <div className="w-full md:w-6/12 p-6">
          <h1 className="text-5xl font-sans font-bold leading-[60px]">
            {headers.heading}
          </h1>
          <p className="mt-4 text-base leading-[28px]">{headers.subHeading}</p>
          <div className="flex mt-4">
            {links.map((link, index) => (
              <Fragment key={index}>
                <a href={link.fields.facebook} className="ml-3 first:ml-0">
                  <FaFacebook className="text-blue-500 text-xl" />
                </a>
                <a href={link.fields.twitter} className="ml-3 first:ml-0">
                  <FaTwitter className="text-blue-500 text-xl" />
                </a>
                <a href={link.fields.Instagram} className="ml-3 first:ml-0">
                  <FaInstagram className="text-rose-500 text-xl" />
                </a>
                <a href={link.fields.linkedin} className="ml-3 first:ml-0">
                  <FaLinkedin className="text-blue-400 text-xl" />
                </a>
              </Fragment>
            ))}
          </div>
          <div className="mt-5">
            <a
              href="#"
              className="outline-none capitalize text-white inline-block px-5 py-3 bg-orange-400 text-base font-medium"
            >
              get in touch
            </a>
          </div>
        </div>
        <div className="w-full md:w-6/12 p-6">
          <div>
            <Image
              src={`http:${headers?.headerImage?.fields?.file?.url}`}
              alt="header image"
              className="w-full h-auto object-cover"
              width={600}
              height={400}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
