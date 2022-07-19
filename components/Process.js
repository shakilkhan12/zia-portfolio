import Image from 'next/image'
import img from "/images/order.png"
const Process = () => {
  return (
    <div className="py-[100px] bg-white mt-[80px]">
    <div className="max-w-screen-xl mx-auto px-6">
        <h1 className="text-3xl font-bold capitalize text-center mb-14">We Simplify Software Development Process</h1>
        <div>
            <Image src={img} alt="Picture of the author" layout='responsive'
             />
        </div>
        </div>
        </div>
  )
}

export default Process