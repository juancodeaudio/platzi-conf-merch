import { useContext } from 'react'
import AppContext from '@context/AppContext'
import Map from '@components/Map'
import useGoogleAddress from '@hooks/useGoogleAddress'
import '@styles/components/Success.scss'

const Success = () => {
  const {state: {buyer}} = useContext(AppContext)
  const location = useGoogleAddress(buyer[0].address)
  return (
    <div className="Success">
      <div className="Success-content">
        <h2>`${buyer.name}, gracias por tu compra`</h2>
        <span>Tu pedido llegará en 3 días a tu dirección: </span>
        <div className="Success-map">
          <Map data={location}/>
        </div>
      </div>
    </div>
  )
}

export default Success