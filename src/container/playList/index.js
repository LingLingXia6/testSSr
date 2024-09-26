import React from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import pageBackImg from '../../imgs/pageBack.png';
import './index.css';
const PlayListPage = () => {
  const queryClient = useQueryClient();
   const query = useQuery('posts', () => axios.get('https://jsonplaceholder.typicode.com/posts'))
  //console.log("query", query);

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
