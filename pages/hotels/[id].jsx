import Image from "next/image"
import Hotels from ".";

function SingleHotel({ hotel }) {
    return (
        <div className="w-7/12 mx-auto scroll-my-10">
            <Image src={hotel?.banner} alt="hotel" width={2000} height={2000} className="h-large-box my-5 mx-auto w-full  " />


            <div className=" ">
                <h3 className="text-3xl font-bold">{hotel?.name}</h3>
                <p className="text-xl my-5 text-justify">{hotel?.desciption}</p>
                <button className="w-60 h-14 rounded-lg bg-blue-400 text-lg ">Price  {hotel?.price}</button>

                <p className=" text-3xl font-bold my-5 ">Facilities : </p>
                <ul className="flex text-xl justify-between">
              {
                hotel ? hotel.facilities?.map((ele) => {
                  return (

                    <li key={ele.name} className="mr-10 mb-3 flex items-center">
                      <span>
                        <Image src={ele.img} width={200} height={200} className="w-10 h-10 rounded-full" />
                      </span>
                      <span className="ml-5">{ele.name}</span>
                    </li>

                  )
                }) : ""
              }
            </ul>
                <button className="w-60 h-14 rounded-lg bg-red-400 text-lg my-5 ">Book Now</button>
            </div>
        </div>
    );
};

export async function getServerSideProps(ctx) {
    const res = await fetch(`http://localhost:3000/api/hotels/${ctx.query.id}`);
    const data = await res.json();
    return {
        props: {
            hotel: data.hotel,
        },
    };
}

export default SingleHotel
