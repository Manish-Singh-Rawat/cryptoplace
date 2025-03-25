import React, {useContext} from 'react'
import './Navbar.css'
import logos from '../../assets/logos.png'
import arrow_ico from '../../assets/arrow_ico.png';
import { CoinContext } from '../../context/CoinContext'
import {Link} from 'react-router-dom'
 
const Navbar = () => {

  const {setCurrency} = useContext(CoinContext)


  const currencyHandler = (event)=>{
    switch (event.target.value){
      case "usd": {
        setCurrency({name: "usd", symbol: "$"})
        break;
      }
      case "eur": {
        setCurrency({name: "eur", symbol: "€"})
        break;
      }
      case "inr": {
        setCurrency({name: "inr", symbol: "₹"})
        break;
      }
      default : {
        setCurrency({name: "usd", symbol: "$"})
        break;
      }
    }
   }

  return (
    <div className='navbar'>
      <Link to={'/'}>
        <img src={logos} alt="" className='logo'/>
        </Link>
    <ul>
      <Link to={'/'}>  <li>Home</li> </Link>
        <li>Featuring</li>
        <li>Pricing</li>
        <li>Blog</li>
    </ul>
    <div className="nav-right"></div>
    <select onChange={currencyHandler}>
        <option value="usd">USD</option>
        <option value="eur">EUR</option>
        <option value="inr">INR</option>
    </select>
    <button>Sign up <img src={arrow_ico} alt="" /></button>
    </div>
  )
}

export default Navbar
