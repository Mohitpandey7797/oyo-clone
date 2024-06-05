'use client'
import Image from 'next/image'
import Block from './Block'
import Link from 'next/link'
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useEffect, useState } from 'react';

function Header1() {
  const [auth, setAuth] = useState(null); // Initialize auth state
  const router = useRouter();

  useEffect(() => {
    const user = Cookies.get("user");
    setAuth(user); // Update auth state
  }, []); // Empty dependency array to run only once on mount

  const handleLogout = () => {
    Cookies.remove('user');
    setAuth(null); // Update auth state to null
    router.push('/');
  }

  return (
    <div className='flex justify-between border-b-2 border-gray-300 items-center h-20 px-10'>
      <Image src={'/logo.png'} alt='logo' width={150} height={150} />

      <div className='h-full flex'>
        <Block title={'Become a member'} para={'Additional 0% off on stays.'} imageSrc={'https://img.icons8.com/color/48/000000/discount.png'} />
        <Block title={'OYO for business'} para={'Trusted by 5000 corporates.'} imageSrc={'https://img.icons8.com/color/48/000000/briefcase.png'} />
        <Block title={'List your property'} para={'Start earning in 30 min.'} imageSrc={'https://img.icons8.com/color/48/000000/home.png'} />
        <Block title={'9410763766'} para={'Call us to book now.'} imageSrc={'https://img.icons8.com/color/48/000000/phone.png'} />

        <div className='flex items-center px-3'>
          <Image src={'https://img.icons8.com/color/48/000000/user-male-circle.png'} alt='demo' width={30} height={30} className="mr-5" />
          {auth ? (
            <h3 className='font-bold cursor-pointer' onClick={handleLogout}>Logout</h3>
          ) : (
            <Link href={'/login'}>
              <h3 className='font-bold'>Login / SignUp</h3>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header1
