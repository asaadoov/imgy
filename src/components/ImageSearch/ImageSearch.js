import React from 'react';
import "./ImageSearch.css";

export const ImageSearch = ({fetchImages}) => {
  return (
    <div className="imageSearch">
      <form onSubmit={fetchImages} className="imageSearch__form"> 
        <input type="text" autoComplete="off" name="searchValue" placeholder="Search images..."/>
        <button>Go</button>
      </form>
    </div>
  )
}

export default ImageSearch;
