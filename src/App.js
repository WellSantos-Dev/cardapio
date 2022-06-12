import { Header } from "./components/Header";
import { Results } from "./components/Results";
import { useState } from 'react'
import data from './data'

function App() {
  const [ menuItems, setMenuItems ] = useState(data)

  const filterItems = (category) => {
    if(category === 'all') {
      setMenuItems(data)
      return;
    }

    const newItems = data.filter((item) => item.category === category)
    setMenuItems(newItems)
  }

  return (
    <div className="flex items-center justify-center flex-col">
      <h1 className="text-4xl font-semibold text-white pb-16 pt-32"><span className="text-pink-500 font-bold">#</span> Cardapio diário</h1>
      <Header filterItems={filterItems}/>
      <Results items={menuItems}/>
    </div>
  );
}

export default App;
