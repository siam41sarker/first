const Cart = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-80 bg-white shadow-lg z-50 transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="p-4 flex justify-between items-center border-b">
        <h2 className="text-xl font-bold">Your Cart</h2>
        <button onClick={onClose} className="text-gray-600 hover:text-black">
          ✕
        </button>
      </div>
      <div className="p-4 overflow-y-auto h-[calc(100%-64px)]">
        <p>Your cart is empty</p>
        {/* Add real cart items here */}
      </div>
    </div>
  );
};

export default Cart;
