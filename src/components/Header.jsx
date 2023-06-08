import { Link } from 'react-router-dom'
import AppContext from '@context/AppContext'
import { useContext } from 'react'
import logo from '@assets/logo-gndx.png'
import Title from '@components/Title.tsx'

import '../styles/components/Header.scss'

const Header = () => {
  const { state: { cart } } = useContext(AppContext)
  return (
    <div className="Header">
      <Link to="/">
        
        <h1 className="Header-title">
          <img src={logo} alt="logo" width="32" style={{marginRight: "20px"}} />
          <Title title="Platzi Conf Merch" />
        </h1>
      </Link>
      <div className="Header-checkout">
        <Link to="/checkout">
          <i className="fas fa-shopping-basket"></i>
        </Link>
        {cart.length > 0 && <div className='Header-alert'>{cart.length}</div>}
      </div>
    </div>
  )
}

export default Header