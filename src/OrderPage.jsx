/* eslint-disable react/prop-types */
import { desserts as initialDeserts } from "./data";

export default function OrderPage({ cartItems, setCartItems, setShowOrderPage, setDesserts }) {
  const handleStartNewOrder = () => {
    setCartItems([]);
    setShowOrderPage(false);
    setDesserts([...initialDeserts]);

  };
  return (
    <div className="h-auto w-[90%] lg-w-1/2 bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-lg p-4">
      <img src="/assets/images/icon-order-confirmed.svg" alt="" />
      <h1 className="text-4xl font-bold pb-4">Order Confirmed</h1>
      <p>We hope you enjoyed our food</p>
      {cartItems.map((item) => (
        <div key={item.id} className="my-4 flex gap-4">
          <img
            src={item.image.thumbnail}
            alt=""
            className="w-12 h-12 rounded-lg"
          />
          <div className="flex-1">
            <h3 className="text-[0.85rem] font-bold">{item.name}</h3>
            <div className="flex gap-10 mt-3">
              <p className="text-[0.85rem] text-rose-700 font-bold">
                {item.itemCount}x
              </p>
              <p className="text-[0.85rem] text-rose-400">
                @{item.price.toFixed(2)}
              </p>
            </div>
          </div>
          <p className="text-[0.85rem] text-rose-700 font-bold self-center">
            ${(item.price * item.itemCount).toFixed(2)}
          </p>
        </div>
      ))}
    
    <div className="flex justify-between items-center">
     <p className="text-[0.85rem] text-black">Order Total</p>
        <p className="text-xl text-black font-bold">
          $
          {cartItems.reduce(
            (acc, item) => acc + item.price * item.itemCount,
            0
          ).toFixed(2)}
        </p>
    </div>
    
    <button className="bg-rose-700 text-white px-4 py-2 w-full my-6  rounded-full" onClick={handleStartNewOrder}>Start New Order </button>
    </div>
  );
}
