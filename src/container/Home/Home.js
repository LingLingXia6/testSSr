import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUserList, getHotMusic } from '../../store/actions';

import AwesomeSlider from 'react-awesome-slider';

import 'react-awesome-slider/dist/styles.css';
import './index.css';
const Home = ({ hotMusic, banners }) => {
  //console.log("home--store-state", Array.isArray(state.hotMusic) );
  console.log('hotMusic-component', hotMusic?.length);

  useEffect(() => {
    console.log(2222, hotMusic);
    //  getUserList();
    //  getHotMusic();
  }, []);
  return (
    <div className='homebg'>
      <ul></ul>
     

     
        
    
      <AwesomeSlider animation="cubeAnimation" height={500} width={600} >
        {banners &&
          banners.map((d) => (
            <div className='item' key={d.bannerId}>
              <div className='left'>
                <div className='leftContainer'>
                  <div className='imgContainer'>
                    <img src={d.pic} />
                  </div>
                </div>
              </div>
            </div>
          ))}
      </AwesomeSlider>
      </div>
      

  );
};
Home.getInitialData = (store) => {
  console.log('store', store);
  // will return a promise because of the thunk
  return store.dispatch(getHotMusic());
};
const mapStateToProps = (state) => ({
  hotMusic: state.hotMusic.hotMusics,
  banners: state.hotMusic.banners,
});
// {1}
// const mapDispatchToProps = (dispatch)=>({
//   getUserList(){
//     dispatch(getUserList(dispatch))
//   },
//   getHotMusic() {
//     dispatch(getHotMusic(dispatch))
//   }
// })

export default connect(mapStateToProps)(Home);
