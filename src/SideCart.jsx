/* eslint-disable react/prop-types */
export default function SideCart({
  desserts,
  setDesserts,
  cartItems,
  setCartItems,
  setShowOrderPage,
}) {
  const removeFromCart = (id) => {
    // Update the itemCount to 0 for the dessert in the desserts array
    const updatedDesserts = desserts.map((desert) => {
      if (desert.id === id) {
        return { ...desert, itemCount: 0 };
      }
      return desert;
    });
    setDesserts(updatedDesserts);

    // Remove the item from the cartItems array entirely
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCartItems);
  };
  const handleConfirmOrder = () => {
    setShowOrderPage(true);
  };

  // Calculate the total amount and total items, excluding items with itemCount 0
  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.price * item.itemCount,
    0
  );

  const totalItems = cartItems.reduce(
    (acc, item) => acc + (item.itemCount > 0 ? item.itemCount : 0),
    0
  );

  return (
    <div className="w-1/3 shadow-lg rounded-lg p-4 h-auto basis-[300px] flex-1">
      <h2 className="text-2xl font-bold text-rose-700 mb-4">
        Your Cart ({totalItems})
      </h2>
      <div className="flex flex-col gap-4 my-10">
        {totalItems === 0 ? (
          <div className="flex flex-col justify-center items-center h-24">
            <img
              src="/assets/images/illustration-empty-cart.svg"
              alt=""
              className="mt-10"
            />
            <p className="text-[0.85rem] text-black">
              Your added items will appear here
            </p>
          </div>
        ) : (
          cartItems.map(
            (item) =>
              item.itemCount > 0 && (
                <div key={item.id}>
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-[0.85rem] font-bold">{item.name}</h3>
                      <div className="flex gap-10">
                        <p className="text-[0.85rem] text-rose-700 font-bold">
                          {item.itemCount}x
                        </p>
                        <p className="text-[0.85rem] text-rose-400">
                          @{item.price.toFixed(2)}
                        </p>
                        <p className="text-[0.85rem] text-rose-700 font-bold">
                          ${(item.price * item.itemCount).toFixed(2)}
                        </p>
                      </div>
                    </div>
                    <button
                      className=""
                      onClick={() => removeFromCart(item.id)}
                    >
                      <img src="/assets/images/icon-remove-item.svg" alt="" />
                    </button>
                  </div>
                  <hr className="my-2" />
                </div>
              )
          )
        )}
      </div>
      {totalItems > 0 && (
        <>
          <div className="flex justify-between items-center mt-32 mb-10">
            <p className="text-[0.85rem] text-black font-bold">Order Total</p>
            <p className="text-[0.85rem] text-black font-bold">
              ${totalAmount.toFixed(2)}
            </p>
          </div>
          <p className="text-[0.85rem] text-black flex gap-4 mb-6">
            {" "}
            <img src="/assets/images/icon-carbon-neutral.svg" alt="" />
            <p>
              This is a <strong>Carbon Neutral</strong> delivery
            </p>
          </p>

          <button className="bg-rose-700 text-white px-4 py-2 text-center w-full rounded-full" onClick={handleConfirmOrder}>
            Confirm Order
          </button>
        </>
      )}
    </div>
  );
}
