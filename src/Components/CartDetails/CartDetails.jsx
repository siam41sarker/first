import { useContext } from "react";
import { cartContext } from "../../main";
import { NavLink } from "react-router-dom";
const CartDetails = () => {
  const {quantity,setQuantity, cartItems,setCartItems } = useContext(cartContext);
  const handleCartItemsQuantity = (id,value,min,max)=>
        {
            if(value<min) value = min;
            if(value>max) value = max;
            let y = quantity+1;
            setQuantity(y);
            setCartItems(x=>(
                x.map(item=>(
                    item.id === id ? {
                        ...item,cartQuantity:value
                    }:item
                ) )
            ))
        }
  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-center text-9xl mt-4">Cart</h1>
        <div className="divider divider-success mb-10"></div>
        <form action="/cart" method="post">
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="border-b">
                <th className="px-3 py-2 text-center border border-gray-300">
                  Remove
                </th>
                <th className="px-3 py-2 text-center border border-gray-300">
                  Product
                </th>
                <th className="px-3 py-2 text-center border border-gray-300">
                  Name
                </th>
                <th className="px-3 py-2 text-center border border-gray-300">
                  Price
                </th>
                <th className="px-3 py-2 text-center border border-gray-300">
                  Quantity
                </th>
                <th className="px-3 py-2 text-center border border-gray-300">
                  Subtotal
                </th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id} className="border-b">
                  <td className=" border border-gray-300 text-center align-middle">
                    <button
                      className="inline-flex w-8 h-8 items-center justify-center p-0 text-[#a7231a] text-2xl leading-none rounded-full transition duration-200 ease-in-out hover:bg-[#a7231a] hover:text-white"
                    >
                      ×
                    </button>
                  </td>
                  <td className="px-3 py-2 border border-gray-300 flex justify-center  items-center">
                    <img
                      src={item.image}
                      alt="Product"
                      className="w-16 h-16 object-cover"
                    />
                  </td>
                  <td className="px-3 py-2 border border-gray-300 text-center text-[#c36] underline">
                    <NavLink to={`/${item.title.toLowerCase().replace(/\s+/g,"-")}`}>{item.title}</NavLink>
                  </td>
                  <td className="px-3 py-2 border border-gray-300 text-center">
                    ${item.priceOfIt}
                  </td>
                  <td className="px-3 py-2 border border-gray-300 text-center">
                    <input
                      type="number"
                      className="w-16 text-center py-2 border rounded"
                      value={item.cartQuantity}
                      min="1"
                      max="999"
                      step="1"
                      onChange={(e)=>handleCartItemsQuantity(item.id,e.target.value,1,999)}
                    />
                  </td>
                  <td className="px-3 py-2 border border-gray-300 text-center">
                    ${parseFloat(item.priceOfIt * item.cartQuantity).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-between mt-4 border-t pt-4">
            <div className="flex items-center space-x-2 border-r pr-4">
              <label htmlFor="coupon_code" className="font-bold">
                Coupon:
              </label>
              <input
                type="text"
                id="coupon_code"
                className="p-2 border rounded w-40"
                placeholder="Coupon code"
              />
              <button     
                type="submit"
                className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-500 text-black"
              >
                Apply coupon
              </button>
            </div>
            <button
              type="submit"
              className="ml-4 bg-gray-300 px-4 py-2 rounded hover:bg-gray-500 text-black"
            >
              Update cart
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CartDetails;
