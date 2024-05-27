
import Image from "next/image"
function Block({title, para, imageSrc}) {
  return (
    <div className=' border-r border-gray-300 w-60 h-full flex items-center px-3'>
      <Image src={imageSrc} alt='demo' width={30} height={30}className=" mr-5" />
      <div>
        <h3 className="font-bold" >{title}</h3>
        <p className="text-gray-400 text-xs line-clamp-1" >{para}</p>
      </div>
    </div>
  )
}

export default Block
