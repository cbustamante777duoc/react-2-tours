import React, { useState } from 'react';

const Tour = ({ id, image, name, price, info, removeTours }) => {
  const [readmore, setReadmore] = useState(false);
  return <article className='single-tour'>
    <img src={image} alt={name} />

    <footer>
      <div className='tour-info'>
        <h4>{name}</h4>
        <h4 className='tour-price'>{price}</h4>
      </div>
      <div>
        <p>
          {readmore ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setReadmore(!readmore)}>
            {readmore ? 'show less' : 'read more'}
          </button>
        </p>
        <button className='delete-btn' onClick={() => removeTours(id)}>
          not-interested
        </button>
      </div>
    </footer>
  </article>
};

export default Tour;