import Card from "./Card"
import { useState } from "react"
import { desserts as initialDeserts } from "./data";
import SideCart from "./SideCart";
import OrderPage from "./OrderPage";


export default function App() {
  const [desserts, setDesserts] = useState([...initialDeserts]);
  const [cartItems, setCartItems] = useState([]);
  const [showOrderPage, setShowOrderPage] = useState(false);

  return (
    <section className="px-6 py-6">
      <div className={`${showOrderPage ? 'blur-sm' : ''}`}>
      <h1 className="text-4xl font-bold pb-4">Desserts</h1> 
      <div className="flex gap-4 flex-wrap">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full flex-1 basis-[900px]">
      <Card desserts={desserts} setDesserts={setDesserts} cartItems={cartItems} setCartItems={setCartItems} />
     
      </div>
      <SideCart desserts={desserts} setDesserts={setDesserts} cartItems={cartItems} setCartItems={setCartItems} setShowOrderPage={setShowOrderPage}/>
      </div>
     </div>

      {showOrderPage && <OrderPage cartItems={cartItems} setCartItems={setCartItems} setShowOrderPage={setShowOrderPage} desserts={desserts}setDesserts = { setDesserts } />}
    </section>
  )
}