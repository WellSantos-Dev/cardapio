export const Results = ({items}) => {
  
  console.log(items)
  return (
    <div className="flex flex-wrap items-center">
      {items.map((result) => {
        const { image, price, name, text } = result
        return <div className="flex items-center max-w-xl m-4 rounded-md bg-sky-900 p-2">
          <div className="flex-1 w-32 h-36 bg-cover bg-center rounded-md mr-6" style={{backgroundImage: `url(${image})`}}></div>
          <div className="flex-1">
            <h1 className="text-pink-700 font-bold text-2xl pb-3">${price}</h1>
            <h1 className="text-blue-300 text-2xl font-bold pb-6">{name}</h1>
            <p className="text-white text-1xl font-semibold tracking-wide">{text}</p>
          </div>
        </div>
      })}
    </div>
  )
}