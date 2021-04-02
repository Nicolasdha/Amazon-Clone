import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import LocationOnIcon from "@material-ui/icons/LocationOn";

import "../styles/Header.css";
import { Link } from "react-router-dom";
import { useStateValue } from "../context/stateProvider";
import { auth } from "../firebase/firebase";

function Header() {
  const [{ basket, user }] = useStateValue();

  const handleAuth = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className='header__container'>
      <div className='header'>
        <Link to='/'>
          <img
            className='header__logo'
            src='https://pngimg.com/uploads/amazon/amazon_PNG11.png'
            alt='Amazon Logo'
          />
        </Link>

        <div className='header__option--first'>
          <LocationOnIcon />
          <div className='header__option--firstText'>
            <span className='header__optionLineOne'>Hello</span>
            <span className='header__optionLineTwo'>Select your address</span>
          </div>
        </div>

        <div className='header__search'>
          <input className='header__searchInput' type='text' alt='Search Bar' />
          <SearchIcon className='header__searchIcon' />
        </div>

        <div className='header__nav'>
          <Link to={!user ? "/login" : "/"}>
            <div onClick={handleAuth} className='header__option'>
              <span className='header__optionLineOne'>
                Hello {user ? user.email : "Guest"}
              </span>
              <span className='header__optionLineTwo'>
                {user ? "Sign Out" : "Sign In"}
              </span>
            </div>
          </Link>

          <Link to='/orders'>
            <div className='header__option'>
              <span className='header__optionLineOne'>Returns</span>
              <span className='header__optionLineTwo'>& Orders</span>
            </div>
          </Link>
          {/*  <div className='header__option'>
            <span className='header__optionLineOne'>Your</span>
            <span className='header__optionLineTwo'>Prime</span>
  </div>*/}
          <Link to='/checkout'>
            <div className='header__optionBasket'>
              <ShoppingCartIcon />
              <span className='header__optionLineTwo header_basketCount'>
                <span className='header__basketLength'>{basket.length}</span>
                <span>Cart</span>
              </span>
            </div>
          </Link>
        </div>
      </div>
      <div className='subHeader'>
        <div className='subHeader__nav'>
          <p className='subHeader__option'>All</p>
          <p className='subHeader__option'>Best Sellers</p>
          <p className='subHeader__option'>Today's Deals</p>
          <p className='subHeader__option'>Prime</p>
          <p className='subHeader__option'>Customer Service</p>
          <p className='subHeader__option'>New Releases</p>
          <p className='subHeader__option'>Books</p>
          <p className='subHeader__option'>Fashion</p>
          <p className='subHeader__option'>Kindle Books</p>
          <p className='subHeader__option'>Gift Cards</p>
          <p className='subHeader__option'>Toys & Games</p>
          <p className='subHeader__option'>Amazon Home</p>
          <p className='subHeader__option'>Find a Gift</p>
          <p className='subHeader__option subHeader__option--large'>
            Spring clean with low prices
          </p>
          <p className='subHeader__option'>Find a Gift</p>
          <p className='subHeader__option'>Find a Gift</p>
          <p className='subHeader__option'>Find a Gift</p>
          <p className='subHeader__option'>Find a Gift</p>
          <p className='subHeader__option'>Find a Gift</p>
          <p className='subHeader__option'>Find a Gift</p>
          <p className='subHeader__option'>Find a Gift</p>
          <p className='subHeader__option'>Find a Gift</p>
          <p className='subHeader__option'>Find a Gift</p>
          <p className='subHeader__option'>Find a Gift</p>
          <p className='subHeader__option'>Find a Gift</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
