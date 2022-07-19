import Image from "next/image";
import img from "/images/laravel.svg";
const Skills = () => {
  return (
    <div className="py-[80px] bg-orange-50">
      <div className="max-w-screen-xl mx-auto px-6">
        <h1 className="heading text-center text-3xl font-bold">
          technology <span className="text-orange-500">stack</span>
        </h1>
        <p className="mt-5 text-center text-lg w-full md:w-[80%] mx-auto">
          Our professional team has an unquenchable thirst for knowledge we are
          passionate about solving real-life problems with the latest modern
          technologies like
        </p>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full sm:w-6/12 md:w-4/12 lg:w-3/12 p-4">
            <div className="bg-white p-6 flex items-center flex-col">
              <Image
                src={img}
                alt="Picture of the author"
                className="m-auto block"
                width={90}
                height={90}
                layout="intrinsic"
              />
              <span className="capitalize font-medium text-base block mt-2">
                laravel
              </span>
            </div>
          </div>
          <div className="w-full sm:w-6/12 md:w-4/12 lg:w-3/12 p-4">
            <div className="bg-white p-6 flex items-center flex-col">
              <Image
                src={img}
                alt="Picture of the author"
                className="m-auto block"
                width={90}
                height={90}
                layout="intrinsic"
              />
              <span className="capitalize font-medium text-base block mt-2">
                laravel
              </span>
            </div>
          </div>
          <div className="w-full sm:w-6/12 md:w-4/12 lg:w-3/12 p-4">
            <div className="bg-white p-6 flex items-center flex-col">
              <Image
                src={img}
                alt="Picture of the author"
                className="m-auto block"
                width={90}
                height={90}
                layout="intrinsic"
              />
              <span className="capitalize font-medium text-base block mt-2">
                laravel
              </span>
            </div>
          </div>
          <div className="w-full sm:w-6/12 md:w-4/12 lg:w-3/12 p-4">
            <div className="bg-white p-6 flex items-center flex-col">
              <Image
                src={img}
                alt="Picture of the author"
                className="m-auto block"
                width={90}
                height={90}
                layout="intrinsic"
              />
              <span className="capitalize font-medium text-base block mt-2">
                laravel
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
