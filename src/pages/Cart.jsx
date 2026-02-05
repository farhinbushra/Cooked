const Cart = ({ cart }) => {
  
  console.log('Cart items:', cart);

  if (!cart || cart.length === 0) {
    return (
      <div style={{ padding: '20px' }}>
        <h2>Your Cart</h2>
        <p>Your cart is empty</p>
        <p>Add items from the Menu page</p>
      </div>
    );
  }

  // Calculate total price
  const totalPrice = cart.reduce((sum, item) => {
    return sum + (item.price * (item.quantity || 1));
  }, 0);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Your Cart ({cart.length} items)</h2>
      
      <div style={{ marginTop: '20px' }}>
        {cart.map((item, index) => (
          <div 
            key={index} 
            style={{
              border: '1px solid #ddd',
              padding: '15px',
              marginBottom: '10px',
              borderRadius: '5px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <div>
              <h3 style={{ margin: '0 0 5px 0' }}>{item.name || 'Item'}</h3>
              <p style={{ margin: '0', color: '#666' }}>
                Price: ${item.price || 0}
              </p>
              <p style={{ margin: '0', color: '#666' }}>
                Quantity: {item.quantity || 1}
              </p>
            </div>
            <div>
              <p style={{ margin: '0', fontWeight: 'bold' }}>
                ${(item.price * (item.quantity || 1)).toFixed(2)}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div style={{
        marginTop: '30px',
        padding: '20px',
        backgroundColor: '#f8f9fa',
        borderRadius: '5px'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <h3 style={{ margin: '0' }}>Total Amount:</h3>
          <h3 style={{ margin: '0', color: '#e44d26' }}>
            ${totalPrice.toFixed(2)}
          </h3>
        </div>
        
        <button style={{
          marginTop: '20px',
          padding: '10px 30px',
          backgroundColor: '#28a745',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          fontSize: '16px',
          cursor: 'pointer',
          width: '100%'
        }}>
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
