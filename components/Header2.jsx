
function Header2() {
    const List = [
        {
            name:'Banglore'
        },
        {
            name:'New Delhi'
        },
        {
            name:'Agra'
        },
        {
            name:'Dehradun'
        },
        {
            name:'Mumbai'
        },
        {
            name:'Patna'
        },
    ]
  return (
    <div>
      <div className="flex py-3 bg-gray-200 justify-between px-10">
        {
            List.map((e)=>{
                return(
                    <span key={e.name}>{e.name}</span>
                )
            })
        }
      </div>
    </div>
  )
}

export default Header2
