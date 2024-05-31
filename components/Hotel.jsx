import Image from "next/image"
import Link from "next/link"


function Hotel() {
  return (
    <div className="border-2 border-red-500 rounded-lg h-72 w-full mb-5 p-5">
     <div className="flex">
        <Image src={'https://images.oyoroomscdn.com/uploads/hotel_image/108633/medium/a0993eb13ef180d5.jpg'} alt="hotel" width={500} height={500} className="w-96 h-60 mr-3"/>

      <div className="grid grid-rows-3 ">

      <Image src={'https://images.oyoroomscdn.com/uploads/hotel_image/108633/medium/a0993eb13ef180d5.jpg'} alt="hotel" width={500} height={500} className="w-28  "/>
      <Image src={'https://images.oyoroomscdn.com/uploads/hotel_image/108633/medium/a0993eb13ef180d5.jpg'} alt="hotel" width={500} height={500} className="w-28  "/>

      <Image src={'https://images.oyoroomscdn.com/uploads/hotel_image/108633/medium/a0993eb13ef180d5.jpg'} alt="hotel" width={500} height={500} className="w-28  "/>

      <Image src={'https://images.oyoroomscdn.com/uploads/hotel_image/108633/medium/a0993eb13ef180d5.jpg'} alt="hotel" width={500} height={500} className="w-28  "/>


      </div>

      <div className="ml-20">
        <h2 className="font-bold text-xl line-clamp-1">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h2>
        <p className="text-justify my-5 text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro earum, id praesentium nulla eligendi qui provident velit nesciunt, at quam eos rem veritatis quia ipsam magnam quos pariatur laboriosam quidem.</p>
        <p className="text-2xl my-5 ">
            <span className="font-bold">Facilities : </span>
            <span>Free Wifi, Pet Care, Swimming Pool, Beaches, Resort</span>
            
        </p>
        <div className="flex items-center">
            <button className="w-60 h-14 rounded-lg bg-blue-400 text-lg ">Price : 4500$</button>
            <Link href={'/hotels'} className="text-xl font-bold text-red-600 ml-10">See Details</Link>
        </div>
       
      </div>
     </div>
    </div>
  )
}

export default Hotel
