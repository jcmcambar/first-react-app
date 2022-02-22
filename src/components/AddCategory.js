import React, { useState } from 'react'
import PropTypes from 'prop-types';

 const AddCategory = ({setCategories}) => {
    
  const [inputValue, setinputValue] = useState('');

const handleInputValue=(e)=>{
    setinputValue(e.target.value);
}

const handleSubmit =(e)=>{
    e.preventDefault();
    //setCategories([...categorie,inputValue])
    //Usando un callback 
    setCategories(cat=>[inputValue, ...cat])
}

  return (
    <form onSubmit={handleSubmit}>
        <input
             type="text"
             value={inputValue}
             onChange={handleInputValue}
             />
      </form>
  )


}

AddCategory.propTypes={
    setCategories : PropTypes.func.isRequired
};

export default AddCategory;
