import Image from "next/image"

function SingleHotel() {
    return (
        <div className="w-7/12 mx-auto scroll-my-10">
            <Image src={'https://images.oyoroomscdn.com/uploads/hotel_image/108633/medium/a0993eb13ef180d5.jpg'} alt="hotel" width={2000} height={2000} className="h-large-box my-5 mx-auto w-full  " />


            <div className=" ">
                <h3 className="text-3xl font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab velit quod, natus officiis quas accusantium.</h3>
                <p className="text-xl my-5 text-justify">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quisquam dicta beatae sapiente, asperiores, dolor laudantium consectetur assumenda labore nisi nemo quaerat expedita quibusdam blanditiis praesentium nulla odit error explicabo hic rem omnis officiis cupiditate aspernatur. Magnam sequi repellendus itaque sint ad animi voluptatem natus dolore soluta? Architecto, repellat numquam!</p>
                <button className="w-60 h-14 rounded-lg bg-blue-400 text-lg ">Price : 4500$</button>
            </div>
            <p className=" text-3xl font-bold my-5 ">Facilities : </p>
            <ul className="flex text-xl justify-between ">
                <li>Swimming Pool</li>
                <li>Dogs</li>
                <li>Graden</li>
                <li>Loundry</li>
                <li>Cricket</li>
            </ul>
            <button className="w-60 h-14 rounded-lg bg-red-400 text-lg my-5 ">Book Now</button>
        </div>
    )
}

export default SingleHotel
