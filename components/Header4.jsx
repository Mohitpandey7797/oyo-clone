'use client'
import Image from "next/image"
function Header4() {
  return (
    <div className="flex my-14 justify-between  items-center border-2  border-gray-300 rounded-lg px-5 " >
      <div className="flex items-center ">
        <Image src={'/fire.png'} alt="banner1" width={200} height={200} className="h-20 w-20 rounded-full mr-5"/>
        <div className="text-xl" >
        <p className="font-bold">Get access to exclusive deals</p>
        <p>Only the best deals reach your inbox</p>
      </div>
      </div>
      
      <div className="flex items-center">
        <input type="email"  className="px-6 py-2 mr-5  w-80 h-16 rounded-lg  outline-none border border-e-gray-300" placeholder="e.g. mohit@gmail.com"/>
        <button type="submit" className="w-48 h-14 bg-red-500  text-xl text-white cursor-pointer rounded-lg">Notify</button>
      </div>
    </div>
  )
}

export default Header4
