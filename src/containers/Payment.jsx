import {useContext } from "react";
import { PayPalScriptProvider, PayPalButtons } from"@paypal/react-paypal-js";
import AppContext from "@context/AppContext";
import { useNavigate } from'react-router-dom';
import'@styles/components/Payment.scss';

const Payment =()=>{
//ustedes usen su forma de manejar los estados, yo no lo estoy haciendo como el profe.
  const navigate = useNavigate()
  const {state, addNewOrder } = useContext(AppContext)
  const { cart, buyer } = state
  
  const paypalOtions = {
    clientId: 'access_token$sandbox$smn9wwd422vw84ry$29febd6a4317374d49f508052bac0a1a',
    intent: 'capture',
    currency: 'USD'
  }

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect'
  }

  const handleSumTotal = () =>{
    const reducer = (acumulator,currentValue) => acumulator + currentValue.price
    const sum = cart.reduce(reducer,0)
    return sum
  }

  const handlePaymentSuccess = (data) => {
    console.log('COMPLETADOOOO');
      const newOrder = {
        buyer,
        product: cart,
        payment: data
      }
      addNewOrder(newOrder);
      navigate('/checkout/success');
      console.log('COMPLETADOOOO 2');
  }


  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido:</h3>
        {cart.map((item) => (
          <div className="Payment-item"key={item.title}>
            <div className="Payment-element">
              <h4>{item.title}</h4>
              <span>
                $
                {' '}
                {item.price}
              </span>
            </div>
          </div>
        ))}
        <div className="Payment-button">
          <PayPalScriptProvider options={{ "client-id": "test" }} >
              <PayPalButtons 
              paypalOptions={paypalOtions}
              buttonStyles={buttonStyles}
              amount={handleSumTotal()}
              onClick={() => console.log('Start Payment')}
              onApprove={data => handlePaymentSuccess(data)}
              onError={error => console.log(error)}
              onCancel={data => console.log(data)}  
              style={{ layout: "horizontal" }} />
          </PayPalScriptProvider>
        </div>
      </div>
    </div>
  );
};

export default Payment;