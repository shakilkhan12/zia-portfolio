import {CgScreen} from "react-icons/cg"
import {MdMobileScreenShare} from "react-icons/md"
import {FaUsers} from "react-icons/fa"
import {HiOutlineShoppingBag} from "react-icons/hi"
const Services = () => {
  return (
    <div className="py-[100px] bg-orange-50 mt-[80px]">
        <div className="max-w-screen-xl mx-auto px-6">
            <h1 className="heading">our services</h1>
            <p className="mt-8">Leverage our decade-long experience and exceptional capabilities to develop custom software, web, and mobile applications that strictly meet your business requirements and help you achieve your business goals.</p>
       
        <div className="flex flex-wrap -mx-6 mt-10">
            <div className="w-full sm:w-6/12 md:w-4/12 lg:w-3/12 p-6">
                <div className="bg-white rounded-sm px-5 py-10 text-center">
                   <span className="flex items-center justify-center w-[80px] h-[80px] bg-orange-50 rounded-full mx-auto">
                   <CgScreen size={35} className="text-orange-700" />
                   </span>
                   <h1 className="capitalize text-lg text-black font-medium mt-5">web developemnt</h1>
                </div>
            </div>
            <div className="w-full sm:w-6/12 md:w-4/12 lg:w-3/12 p-6">
                <div className="bg-white rounded-sm px-5 py-10 text-center">
                   <span className="flex items-center justify-center w-[80px] h-[80px] bg-orange-50 rounded-full mx-auto">
                   <MdMobileScreenShare size={35} className="text-orange-700" />
                   </span>
                   <h1 className="capitalize text-lg text-black font-medium mt-5">mobile app developemnt</h1>
                </div>
            </div>
            <div className="w-full sm:w-6/12 md:w-4/12 lg:w-3/12 p-6">
                <div className="bg-white rounded-sm px-5 py-10 text-center">
                   <span className="flex items-center justify-center w-[80px] h-[80px] bg-orange-50 rounded-full mx-auto">
                   <FaUsers size={35} className="text-orange-700" />
                   </span>
                   <h1 className="capitalize text-lg text-black font-medium mt-5">CRM developemnt</h1>
                </div>
            </div>

            <div className="w-full sm:w-6/12 md:w-4/12 lg:w-3/12 p-6">
                <div className="bg-white rounded-sm px-5 py-10 text-center">
                   <span className="flex items-center justify-center w-[80px] h-[80px] bg-orange-50 rounded-full mx-auto">
                   <HiOutlineShoppingBag size={35} className="text-orange-700" />
                   </span>
                   <h1 className="capitalize text-lg text-black font-medium mt-5">ecommerce</h1>
                </div>
            </div>
            
        </div>
        </div>
    </div>
  )
}

export default Services