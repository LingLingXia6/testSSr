import React from 'react';
import pageBackImg from '../../imgs/pageBack.png';
import './index.css';
const PlayListPage = () => {
  return (
    <div className='playListWrap'>
      <div className='goBackHeader'>
        <img src={pageBackImg} className='backImg' alt='goback' />
        <div className='title'>Play List</div>
        <div className='rounded'>
          <span className='in_rounded' />
        </div>
      </div>
    </div>
  );
};
export default PlayListPage;
