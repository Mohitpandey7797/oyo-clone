'use client';
import Image from "next/image";
import Head from "next/head";
import Cookies from "js-cookie";
import Link from "next/link";

function SingleHotel({ hotel }) {

  let auth;
  if(typeof window!== undefined){
    auth = Cookies.get('user');
  }
    return (<>
    
        <Head>
          <title>{hotel?.name}</title>
        </Head>
        <div className="w-7/12 mx-auto scroll-my-10">
           
            <Image src={hotel?.banner} alt="hotel" width={2000} height={2000} className="h-large-box my-5 mx-auto w-full  " />


            <div className=" ">
                <h3 className="text-3xl font-bold">{hotel?.name}</h3>
                <p className="text-xl my-5 text-justify">{hotel?.description}</p>
                <button className="w-60 h-14 rounded-lg bg-blue-400 text-lg ">Price {hotel?.price}</button>

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
               {
                auth ?  (<button className="w-60 h-14 rounded-lg bg-red-500 text-lg my-5 ">Book Now</button>): (
                <span className="text-2xl">
                  Please <Link href={'/login'} className="text-blue-500">Login</Link> to get new Offers
                  </span>

               )}
            </div>
        </div>
        </>
    );
};


export async function getServerSideProps(ctx) {
  const { id } = ctx.query;

  const res = await fetch(`${process.env.BASE_URL}/api/hotels/${id}`);
  const data = await res.json();

  const cleanData = (obj) => {
    if (Array.isArray(obj)) {
      return obj.map(item => cleanData(item));
    } else if (obj !== null && typeof obj === 'object') {
      return Object.fromEntries(
        Object.entries(obj).map(([key, value]) => [key, value === undefined ? null : cleanData(value)])
      );
    }
    return obj;
  };

  const cleanedHotel = cleanData(data.hotel);

  return {
    props: {
      hotel: cleanedHotel,
    },
  };
}


export default SingleHotel
