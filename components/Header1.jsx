import Image from 'next/image'
import Block from './Block'


function Header1() {
  return (
    <div className='flex justify-between border-b-2 border-gray-300 items-center h-20 px-10'>
      <Image src={'/logo.png'} alt='logo' width={150} height={150} />
      
      <div className=' h-full flex'>
      <Block title={'Become a member'} para={'Additional 0% off on stays.'}  imageSrc={'https://img.icons8.com/color/48/000000/discount.png' } />
      <Block title={'OYO for business'} para={'Trusted by 5000 corporates.'} imageSrc={'https://img.icons8.com/color/48/000000/briefcase.png'} />
      <Block title={'List your property'} para={'Start earning in 30 min.'} imageSrc={'https://img.icons8.com/color/48/000000/home.png'} />
      <Block title={'9410763766'} para={'Call us to book now.'} imageSrc={'https://img.icons8.com/color/48/000000/phone.png'} />

      <div className='flex items-center px-3'>
      <Image src={'https://img.icons8.com/color/48/000000/user-male-circle.png'} alt='demo' width={30} height={30}className=" mr-5" />
      <h3 className='font-bold' >Login / SignUp</h3>
      </div>
      </div>
    </div>
  )
}

export default Header1
