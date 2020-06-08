import React, {useState, useEffect} from 'react';

import {useDispatch, useSelector} from 'react-redux';
import {setFilteredProducts} from '../../store/actions/products';

import {Search, X} from 'react-feather';


import './NavSearch.scss';

const NavSearch = ({onTopbar, showInput, handleShowInput}) => {

  const dispatch = useDispatch();

  const {products} = useSelector(state => state);

  const [query, setQuery] =  useState("");
 
  const handleChangeInput = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  }

  const handleButtonClick = () => {
    setQuery("");
    handleShowInput()
  }

  useEffect(() => {
    const filteredProducts = products.allProducts.filter(product => 
      product.name.toLowerCase().includes(query.toLowerCase()));

    dispatch(setFilteredProducts(filteredProducts));
  }, [query])

  return (
  <>  
    <div 
      className={onTopbar 
        ? `navsearch--ontopbar ${showInput ? 'navsearch--selected' : ''}`
        : `navsearch ${showInput ? 'navsearch--selected' : ''}`}>
      {
        showInput ? (
          <div className="navsearch__input">
            <input 
              className="input__field"
              value={query}
              onChange={handleChangeInput}
            />
          </div>
        ) : (
          <></>
        )
      }
      <div className='navsearch__icon'>
        <button onClick={handleButtonClick}>
          {showInput ? <X/> : <Search/>}
        </button>
      </div>
      
    </div>
  </>
  )
}

export default NavSearch