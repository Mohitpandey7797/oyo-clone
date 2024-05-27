import Header1 from "../components/Header1";
import Header2 from "../components/Header2";
import Header3 from "../components/Header3";
import Image from "next/image";
import Head from "next/head";
import Header4 from "../components/Header4";
import Footer from "@/components/Footer";
const Home = ()=>{
  return(
    <div>
      <Head>
       <title>OYO : India's Best Online Hotel Booking Site For Sanitized Stay.</title>
       <link rel="icon" href="/icon.svg"></link>
      </Head>
      <Header1/>
      <Header2/>
      <Header3/>
      <div className="mx-20">

      <div className=" my-14">
        <Image 
        src="/banner1.png" 
        alt="banner1" 
        width={1600} // Actual width of the image
        height={800} // Actual height of the image
        layout="responsive" // Makes the image responsive
        className="w-full" 
        />
      </div>
      <div className="mb-14 my-14">
        <Image 
         src="/banner2.png" 
         alt="banner2" 
         width={1600} // Actual width of the image
         height={400} // Actual height of the image
         layout="responsive" // Makes the image responsive
         className="w-full" 
        />
      </div>
      <Header4/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home;
