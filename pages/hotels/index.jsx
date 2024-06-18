import Header1 from "@/components/Header1";
import Hotel from "@/components/Hotel";
import Filters from "@/components/Filters";
import axios from "axios";
import { useState } from "react";

function Hotels({ hotels }) {

  const [price, setPrice] = useState(3500);
  const [list, setList] = useState([]);


  const handlePrice = async () => {
    const { data } = await axios.get(`/api/facilities/range?price = ${price}`)
    if (data?.hotels) {
      setList(data.hotels);
    }

  };

  return (
    <>
      <Header1 />
      <div className="grid grid-cols-12">
        <div className="col-span-3"><Filters price={price} setPrice={setPrice} handlePrice={handlePrice} /></div>
        <div className="col-span-9">
          {
            list.length > 0 ? list.map((e) => {
              return (
              <div className="m-5 " key={hotels._id}>
                <Hotel hotels={hotels} />
              </div>
              )
            }) : hotels ? (
              hotels.map((hotel) => (
                <div className="m-5 " key={hotel._id}>
                  <Hotel hotel={hotel} />
                </div>
              ))
            ) : (
              <p>No hotels found.</p>
            )
          }
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(ctx) {
  const res = await fetch(`${process.env.BASE_URL}/api/hotels?city=${ctx.query.city}`);
  const data = await res.json();

  return {
    props: {
      hotels: data.hotels ? data.hotels : data.allhotels, // Ensure 'hotels' is an array or default to an empty array
    },
  };
}

export default Hotels;
