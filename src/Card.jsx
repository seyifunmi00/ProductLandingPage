export default function Card({desserts, setDesserts, cartItems, setCartItems}) {
 
  const addToCart = (id) => {
    // Update the desserts array to increase itemCount
    const updatedDesserts = desserts.map((desert) => {
      if (desert.id === id) {
        return { ...desert, itemCount: desert.itemCount + 1 };
      }
      return desert;
    });
    setDesserts(updatedDesserts);
  
    // Check if the dessert already exists in the cart
    const dessertToAdd = updatedDesserts.find((desert) => desert.id === id);
  
    if (!dessertToAdd) return; // Return if no dessert found
  
    // Check if dessert already exists in the cart
    const cartItemExists = cartItems.find((item) => item.id === id);
    let updatedCartItems;
  
    if (cartItemExists) {
      // If the dessert exists in the cart, update its itemCount
      updatedCartItems = cartItems.map((item) =>
        item.id === id
          ? { ...item, itemCount: item.itemCount + 1 }
          : item
      );
    } else {
      // If the dessert is not in the cart, add it with itemCount 1
      updatedCartItems = [...cartItems, { ...dessertToAdd, itemCount: 1 }];
    }
  
    setCartItems(updatedCartItems);
  };
  

  const handleAddCount = (id) => {
    // Update item count in desserts
    const updatedDesserts = desserts.map((desert) => {
      if (desert.id === id) {
        return { ...desert, itemCount: desert.itemCount + 1 };
      }
      return desert;
    });
    setDesserts(updatedDesserts);
  
    // Find the updated dessert
    // const dessertToAdd = updatedDesserts.find((desert) => desert.id === id);
  
    // if (!dessertToAdd) return; // Handle case where dessert is not found
  
    // // Update cart items
    // const updatedCartItems = cartItems.map((item) =>
    //   item.id === id ? { ...item, itemCount: item.itemCount + 1 } : item
    // );
  
    // setCartItems(updatedCartItems);

    const updatedCartItems = cartItems.map(item => item.id === id ? {
      ...item , itemCount : item.itemCount + 1
    } : item)

    setCartItems(updatedCartItems)
  };
  

 const handleSubtractCount = (id) => {
   // Decrease item count in desserts
   const updatedDesserts = desserts.map((desert) => {
     if (desert.id === id && desert.itemCount > 0) {
       return { ...desert, itemCount: desert.itemCount - 1 };
     }
     return desert;
   });
   setDesserts(updatedDesserts);

   // Find the updated dessert
  //  const dessertToSubtract = updatedDesserts.find((desert) => desert.id === id);

  //  if (!dessertToSubtract) return; // Handle case where dessert is not found

  //  // Update cart items
  //  const updatedCartItems = cartItems.map((item) =>
  //    item.id === id ? { ...item, itemCount: item.itemCount - 1 } : item
  //  );
  // setCartItems(updatedCartItems);
  
   // console.log(cartItems);
   
   const updatedCartItems = cartItems.map(item => item.id === id ? {
    ...item , itemCount : item.itemCount - 1
  } : item)

  setCartItems(updatedCartItems)
 };

 return desserts.map((desert) => (
   <div key={desert.id} className="flex flex-col items-start relative rounded-lg overflow-hidden">
     <img
       src={desert.image.desktop}
       alt={desert.name}
       className="w-full h-full object-cover mb-6"
     />
     <h3 className="text-sm text-rose-700">{desert.category}</h3>
     <h2 className="text-xl font-bold">{desert.name}</h2>
     <p className="text-md font-bold text-rose-700">
       ${desert.price.toFixed(2)}
     </p>
     {desert.itemCount > 0 ? (
       <div className="px-6 py-2 rounded-full font-bold absolute bottom-[4.8rem] left-1/2 -translate-x-1/2 bg-rose-700 flex items-center gap-2 text-white">
         <button className="ring rounded-full w-4 h-4 ring-white flex items-center justify-center mr-6" onClick={() => handleSubtractCount(desert.id)}><img src="/assets/images/icon-decrement-quantity.svg" alt="" /></button>
         {desert.itemCount}
         <button className="ring rounded-full w-4 h-4 ring-white flex items-center justify-center ml-6" onClick={() => handleAddCount(desert.id)}><img src="/assets/images/icon-increment-quantity.svg" alt="" /></button>
       </div>
     ) : (
       <button
         onClick={() => addToCart(desert.id)}
         className="ring-1 ring-rose-700 text-black px-6 py-2 rounded-full font-bold absolute bottom-[4.8rem] left-1/2 -translate-x-1/2 bg-white flex items-center gap-2 text-[0.7rem]"
       >
         <span>
           <img src="/assets/images/icon-add-to-cart.svg" alt="cart" />
         </span>
         Add to Cart
       </button>
     )}
   </div>
 ));
}
