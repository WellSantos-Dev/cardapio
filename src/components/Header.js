export const Header = ({filterItems}) => {
  return (
    <div className="pb-36">
      <button className="p-2 mr-2 rounded-sm text-white bg-pink-500" onClick={() => filterItems('all')}>TODOS</button>
      <button className="p-2 mr-2 rounded-sm text-white bg-pink-500" onClick={() => filterItems('comida')}>COMIDA</button>
      <button className="p-2 mr-2 rounded-sm text-white bg-pink-500" onClick={() => filterItems('lanche')}>LANCHE</button>
      <button className="p-2 mr-2 rounded-sm text-white bg-pink-500" onClick={() => filterItems('bebidas')}>BEBIDAS</button>
    </div>
  )
}