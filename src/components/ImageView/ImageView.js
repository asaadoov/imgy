import React from 'react';
import { Link } from 'react-router-dom';

import './ImageView.css';

export const ImageView = ( props ) => {
  // console.log(props.location.state.image);
  const { urls: { regular: imgSrc }, links:{html: pageURL}, user, user:{portfolio_url: owner}, alt_description } = props.location.state.image
  
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="imageView__container">
            <img src={imgSrc} alt={alt_description} className="imageView__img img-responsive" />
            <div className="imageView__copyright">
              <p>&copy;Unsplash</p>
            </div>
            <div className="imageView__text">
              <h4>Credit: <span>{user.username}</span></h4>
              <h4>Download: <span><a target="_blank" href={pageURL }>{ pageURL.substring(0, 10) }...[VIEW FULL LINK]</a></span></h4>
              <button className="active-recipe__button">
                <Link to="/">Home</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImageView;
