import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUserList, getHotMusic } from '../../store/actions';

import AwesomeSlider from 'react-awesome-slider';

import 'react-awesome-slider/dist/styles.css';
import './index.css';
const Home = ({  banners,state }) => {
  
  console.log('stateHome', state);

  useEffect(() => {
    // console.log(2222, hotMusic);
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
                    <img src={d.pic} />1
                  </div>
                </div>
              </div>
            </div>
          ))}
      </AwesomeSlider>
      </div>
      

  );
};

const mapStateToProps = (state) => ({
  
  banners: state.banners,
  state:state,
});


export default connect(mapStateToProps)(Home);
