import React, {useState, useEffect} from 'react';

import {useDispatch, useSelector} from 'react-redux';
import {setFilteredProducts, handleShowFilter} from '../../store/actions/products'

import {Search, X} from 'react-feather';


import './NavSearch.scss';

const NavSearch = () => {

  const dispatch = useDispatch();

  const {products} = useSelector(state => state);

  const [showInput, setShowInput] =  useState(false);
  const [query, setQuery] =  useState("");
 
  const handleShowInput = () => {
    setShowInput(!showInput)
    dispatch(handleShowFilter())
    setQuery("");
  }

  const handleChangeInput = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  }

  useEffect(() => {

    const filteredProducts = products.allProducts.filter(product => 
      product.name.toLowerCase().includes(query.toLowerCase()));
    
    console.log(filteredProducts)

    dispatch(setFilteredProducts(filteredProducts));
  }, [query])

  return (
  <>  
    <div className={`navsearch ${showInput ? 'navsearch--selected' : ''}`}>
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
        
        <button onClick={handleShowInput}>
          {showInput ? <X/> : <Search/>}
        </button>
      </div>
      
    </div>
  </>
  )
}

export default NavSearch